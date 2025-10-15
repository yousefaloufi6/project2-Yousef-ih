# SQL Admin Password - Using fixed password
locals {
  sql_admin_password = "P@ssword1234!"
}

# Resource Group
module "resource_group" {
  source = "../modules/resource_group"

  name     = var.resource_group_name
  location = var.location
  tags     = var.tags
}

# Log Analytics Workspace
module "log_analytics" {
  source = "../modules/log_analytics"

  name                = var.log_analytics_workspace_name
  location            = var.location
  resource_group_name = module.resource_group.name
  tags                = var.tags
}

# Virtual Network and Subnets
module "network" {
  source = "../modules/network"

  resource_group_name = module.resource_group.name
  location            = var.location
  vnet_address_space  = var.vnet_address_space
  agw_subnet_cidr     = var.agw_subnet_cidr
  aca_subnet_cidr     = var.aca_subnet_cidr
  aca_ca_subnet_cidr  = var.aca_ca_subnet_cidr # ✅ جديد: سبنت بيئة الـ ACA المفوّضة
  pe_subnet_cidr      = var.pe_subnet_cidr
  environment         = var.environment
  tags                = var.tags
}

# Private DNS Zones
module "dns" {
  source = "../modules/dns"

  resource_group_name = module.resource_group.name
  vnet_id             = module.network.vnet_id
  tags                = var.tags
}

# SQL Server with Private Endpoint
module "sql" {
  source = "../modules/sql"

  server_name         = var.sql_server_name
  database_name       = var.sql_database_name
  admin_login         = var.sql_admin_login
  admin_password      = local.sql_admin_password
  resource_group_name = module.resource_group.name
  location            = var.location
  pe_subnet_id        = module.network.pe_subnet_id
  private_dns_zone_id = module.dns.sql_private_dns_zone_id
  tags                = var.tags
}

# Container Apps Environment (VNet-integrated + ILB) — يُستخدم الـ subnet الجديد المفوَّض
module "container_apps_env" {
  source = "../modules/container_apps_env"

  name                       = var.aca_environment_name
  resource_group_name        = module.resource_group.name
  location                   = var.location
  log_analytics_workspace_id = module.log_analytics.workspace_id
  subnet_id                  = module.network.aca_ca_subnet_id # ✅ بدلًا من aca_subnet_id
  tags                       = var.tags
}

# Frontend Container App (داخلية؛ المرور عبر App Gateway)
module "frontend_container_app" {
  source = "../modules/container_app"

  name                  = "frontend-aloufi"
  container_apps_env_id = module.container_apps_env.id
  resource_group_name   = module.resource_group.name
  container_image       = "docker.io/${var.dockerhub_org}/burgerbuilder-frontend:${var.fe_image_tag}"
  container_port        = 80
  cpu_requests          = "0.25"
  memory_requests       = "0.5Gi"
  min_replicas          = 1
  max_replicas          = 10

  # Make external so Application Gateway can reach it
  ingress_enabled  = true
  ingress_external = true

  # Docker registry authentication
  registry_server   = "docker.io"
  registry_username = var.dockerhub_org
  registry_password = var.dockerhub_password

  # API عبر IP الـ App Gateway (HTTP فقط)
  environment_variables = [
    {
      name  = "VITE_API_BASE_URL"
      value = "http://${module.app_gateway.public_ip_address}"
    }
  ]

  tags = var.tags
}

# Backend Container App (داخلية؛ المرور عبر App Gateway)
module "backend_container_app" {
  source = "../modules/container_app"

  name                  = "backend-aloufi"
  container_apps_env_id = module.container_apps_env.id
  resource_group_name   = module.resource_group.name
  container_image       = "docker.io/${var.dockerhub_org}/burgerbuilder-backend:${var.api_image_tag}"
  container_port        = 8080
  cpu_requests          = "0.5"
  memory_requests       = "1Gi"
  min_replicas          = 1
  max_replicas          = 10

  # Make external so Application Gateway can reach it
  ingress_enabled  = true
  ingress_external = true

  # Docker registry authentication
  registry_server   = "docker.io"
  registry_username = var.dockerhub_org
  registry_password = var.dockerhub_password

  environment_variables = [
    {
      name  = "SERVER_PORT"
      value = "8080"
    },
    {
      name  = "CORS_ALLOWED_ORIGINS"
      value = "http://${module.app_gateway.public_ip_address}"
    },
    {
      name  = "DB_HOST"
      value = module.sql.server_fqdn
    },
    {
      name  = "DB_PORT"
      value = "1433"
    },
    {
      name  = "DB_NAME"
      value = var.sql_database_name
    },
    {
      name  = "DB_USERNAME"
      value = var.sql_admin_login
    },
    {
      name  = "DB_PASSWORD"
      value = local.sql_admin_password
    },
    {
      name  = "DB_DRIVER"
      value = "com.microsoft.sqlserver.jdbc.SQLServerDriver"
    },
    {
      name  = "SPRING_PROFILES_ACTIVE"
      value = "azure"
    }
  ]

  tags = var.tags
}

# Application Gateway
module "app_gateway" {
  source = "../modules/app_gateway"

  name                = var.app_gateway_name
  resource_group_name = module.resource_group.name
  location            = var.location
  subnet_id           = module.network.agw_subnet_id

  # وجّه الـ AGW إلى الـ FQDN الداخلي لكل App
  frontend_fqdn = module.frontend_container_app.fqdn
  backend_fqdn  = module.backend_container_app.fqdn

  tags = var.tags
}

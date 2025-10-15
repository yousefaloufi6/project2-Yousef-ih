# Aloufi Project - Development Configuration
prefix      = "aloufi-dev"
location    = "westus2"
environment = "dev"

# Resource names
resource_group_name          = "re-aloufi-dev"
aca_environment_name         = "aloufi-aca-env-dev"
app_gateway_name             = "agw-aloufi-burgerbuilder-dev"
log_analytics_workspace_name = "law-aloufi-burgerbuilder-dev"

# SQL Database (server name must be lowercase and globally unique)
sql_server_name   = "sql-aloufi-burgerbuilder-dev"
sql_database_name = "burgerbuilderaloufi-dev"
sql_admin_login   = "aloufiyousef"

# Networking - Development IP Space
vnet_address_space = ["10.4.0.0/16"]
agw_subnet_cidr    = "10.4.1.0/24"
aca_subnet_cidr    = "10.4.2.0/23"
pe_subnet_cidr     = "10.4.4.0/24"
aca_ca_subnet_cidr = "10.4.6.0/23"

# Docker Hub
dockerhub_org  = "yousefaloufi6"
dockerhub_user = "yousefaloufi6"

# Image tags
fe_image_tag  = "latest"
api_image_tag = "latest"

# Tags
tags = {
  Environment = "Development"
  Project     = "Aloufi-BurgerBuilder"
  Owner       = "Yousef Aloufi"
  ManagedBy   = "Terraform"
}

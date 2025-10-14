variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
}

variable "vnet_id" {
  description = "ID of the virtual network"
  type        = string
}

variable "container_apps_environment_domain" {
  description = "Domain name of the Container Apps Environment (e.g., victoriousdesert-52021a07.westus2.azurecontainerapps.io)"
  type        = string
}

variable "container_apps_static_ip" {
  description = "Static IP of the Container Apps Environment"
  type        = string
}

variable "tags" {
  description = "Tags to apply to resources"
  type        = map(string)
  default     = {}
}

# Private DNS Zone for SQL Server
resource "azurerm_private_dns_zone" "sql" {
  name                = "privatelink.database.windows.net"
  resource_group_name = var.resource_group_name
  tags                = var.tags
}

# Link Private DNS Zone to VNet
resource "azurerm_private_dns_zone_virtual_network_link" "sql" {
  name                  = "sql-dns-link"
  resource_group_name   = var.resource_group_name
  private_dns_zone_name = azurerm_private_dns_zone.sql.name
  virtual_network_id    = var.vnet_id
  tags                  = var.tags
}

# Private DNS Zone for Container Apps (required for internal load balancer)
resource "azurerm_private_dns_zone" "container_apps" {
  name                = var.container_apps_environment_domain
  resource_group_name = var.resource_group_name
  tags                = var.tags
}

# Link Container Apps Private DNS Zone to VNet
resource "azurerm_private_dns_zone_virtual_network_link" "container_apps" {
  name                  = "container-apps-dns-link"
  resource_group_name   = var.resource_group_name
  private_dns_zone_name = azurerm_private_dns_zone.container_apps.name
  virtual_network_id    = var.vnet_id
  registration_enabled  = false # Don't enable auto-registration, we'll add records manually
  tags                  = var.tags
}

# Create wildcard A record pointing to Container Apps Environment static IP
resource "azurerm_private_dns_a_record" "container_apps_wildcard" {
  name                = "*"
  zone_name           = azurerm_private_dns_zone.container_apps.name
  resource_group_name = var.resource_group_name
  ttl                 = 3600
  records             = [var.container_apps_static_ip]
  tags                = var.tags
}

output "sql_private_dns_zone_id" {
  description = "ID of the SQL private DNS zone"
  value       = azurerm_private_dns_zone.sql.id
}
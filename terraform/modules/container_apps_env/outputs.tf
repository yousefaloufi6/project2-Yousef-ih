output "id" {
  description = "ID of the Container Apps Environment"
  value       = azurerm_container_app_environment.main.id
}

output "name" {
  description = "Name of the Container Apps Environment"
  value       = azurerm_container_app_environment.main.name
}

output "default_domain" {
  description = "Default domain of the Container Apps Environment"
  value       = data.azurerm_container_app_environment.main.default_domain
}

output "static_ip" {
  description = "Static IP address of the Container Apps Environment"
  value       = data.azurerm_container_app_environment.main.static_ip
}
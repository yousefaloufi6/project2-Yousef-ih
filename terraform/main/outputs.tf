output "resource_group_name" {
  description = "Name of the resource group"
  value       = module.resource_group.name
}

output "application_gateway_public_ip" {
  description = "Public IP address of the Application Gateway"
  value       = module.app_gateway.public_ip_address
}

output "container_apps_environment_id" {
  description = "ID of the Container Apps Environment"
  value       = module.container_apps_env.id
}

output "log_analytics_workspace_id" {
  description = "ID of the Log Analytics Workspace"
  value       = module.log_analytics.workspace_id
}

output "sql_server_fqdn" {
  description = "FQDN of the SQL Server"
  value       = module.sql.server_fqdn
}

output "vnet_id" {
  description = "ID of the Virtual Network"
  value       = module.network.vnet_id
}

output "frontend_container_app_fqdn" {
  description = "FQDN of the Frontend Container App"
  value       = module.frontend_container_app.fqdn
}

output "backend_container_app_fqdn" {
  description = "FQDN of the Backend Container App"
  value       = module.backend_container_app.fqdn
}

output "sql_admin_password" {
  description = "SQL Server admin password"
  value       = local.sql_admin_password
  sensitive   = true
}

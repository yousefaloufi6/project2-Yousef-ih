resource "azurerm_container_app" "main" {
  name                         = "ca-${var.name}"
  container_app_environment_id = var.container_apps_env_id
  resource_group_name          = var.resource_group_name
  revision_mode                = "Single"
  tags                         = var.tags

  # Docker Registry Configuration - only if password is provided
  dynamic "registry" {
    for_each = var.registry_password != null && var.registry_password != "" ? [1] : []
    content {
      server               = var.registry_server
      username             = var.registry_username
      password_secret_name = "registry-password"
    }
  }

  # Secrets for registry password - only if password is provided
  dynamic "secret" {
    for_each = var.registry_password != null && var.registry_password != "" ? [1] : []
    content {
      name  = "registry-password"
      value = var.registry_password
    }
  }

  template {
    min_replicas = var.min_replicas
    max_replicas = var.max_replicas

    container {
      name   = var.name
      image  = var.container_image
      cpu    = var.cpu_requests
      memory = var.memory_requests

      dynamic "env" {
        for_each = var.environment_variables
        content {
          name        = env.value.name
          value       = env.value.value
          secret_name = env.value.secret_name
        }
      }
    }
  }

  dynamic "ingress" {
    for_each = var.ingress_enabled ? [1] : []
    content {
      allow_insecure_connections = true
      external_enabled           = var.ingress_external
      target_port                = var.container_port
      transport                  = "auto"

      traffic_weight {
        percentage      = 100
        latest_revision = true
      }
    }
  }

  lifecycle {
    ignore_changes = [
      template[0].container[0].image
    ]
  }
}
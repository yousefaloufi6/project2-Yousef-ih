# Aloufi BurgerBuilder Project - NEW Deployment
prefix              = "aloufiyousef"
resource_group_name = "aloufiyousef-rg"
location            = "australiaeast"
environment         = "prod"

# Network Configuration - NEW IP Address Space (Different from old project)
vnet_address_space = ["10.5.0.0/16"]
agw_subnet_cidr    = "10.5.1.0/24"
aca_subnet_cidr    = "10.5.2.0/23"
pe_subnet_cidr     = "10.5.4.0/24"
aca_ca_subnet_cidr = "10.5.6.0/23"

# Resource Names - NEW Names
aca_environment_name         = "aloufiyousef-aca-env-prod"
app_gateway_name             = "agw-aloufiyousef-burgerbuilder"
log_analytics_workspace_name = "law-aloufiyousef-burgerbuilder"

# SQL Configuration - NEW Aloufi Database
sql_server_name   = "sql-aloufiyousef-burgerbuilder"
sql_database_name = "burgerbuilderaloufi"
sql_admin_login   = "aloufiyousef"

# Docker Hub - Using yousefaloufi6 images (PUBLIC)
dockerhub_org      = "yousefaloufi6"
dockerhub_user     = "yousefaloufi6"
dockerhub_password = ""  # Not needed - images are public

# Image Tags - Aloufi Project Images
fe_image_tag  = "latest"
api_image_tag = "latest"

# Tags
tags = {
  Environment = "Production"
  Project     = "Aloufi-BurgerBuilder"
  Owner       = "Yousef Aloufi"
  ManagedBy   = "Terraform"
}
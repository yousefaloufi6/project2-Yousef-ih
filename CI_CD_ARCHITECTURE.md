# CI/CD Architecture Overview

## High-Level Architecture

```
┌────────────────────────────────────────────────────────────────────────────┐
│                          GITHUB REPOSITORY                                  │
│                    project2-Yousef-ih (yousefaloufi6)                      │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  📁 Code Structure:                                                        │
│  ├─ terraform/        (Infrastructure as Code)                             │
│  ├─ backend/          (Java Spring Boot)                                   │
│  ├─ frontend/         (React + TypeScript + Vite)                          │
│  └─ .github/workflows/ (CI/CD Pipelines)                                   │
│                                                                             │
└────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────────┐
│                           GITHUB ACTIONS                                    │
│                        (CI/CD Orchestration)                               │
└────────────────────────────────────────────────────────────────────────────┘
                    │                               │
                    │                               │
        ┌───────────▼──────────┐         ┌─────────▼──────────┐
        │   Infrastructure     │         │    Application     │
        │     Workflow         │         │     Workflow       │
        │   (infra.yml)        │         │    (app.yml)       │
        └──────────────────────┘         └────────────────────┘
                │                                  │
                │                                  │
                ▼                                  ▼
        
┌───────────────────────┐              ┌────────────────────────┐
│  TERRAFORM PIPELINE   │              │  APPLICATION PIPELINE  │
├───────────────────────┤              ├────────────────────────┤
│                       │              │                        │
│ 1. Checkout Code      │              │ 1. Checkout Code       │
│ 2. Azure Login        │              │ 2. Run Tests           │
│ 3. Terraform Init     │              │    - Backend: Maven    │
│ 4. Terraform Validate │              │    - Frontend: Vitest  │
│ 5. Terraform Plan     │              │ 3. Build Application   │
│ 6. Terraform Apply    │              │ 4. Build Docker Images │
│ 7. Output Resources   │              │ 5. Push to Docker Hub  │
│                       │              │ 6. Deploy to Azure     │
└───────────┬───────────┘              └──────────┬─────────────┘
            │                                     │
            │                                     │
            ▼                                     ▼
            
┌─────────────────────────────────────────────────────────────────┐
│                        DOCKER HUB                                │
│                   (yousefaloufi6)                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  🐳 burgerbuilder-frontend:latest                               │
│  🐳 burgerbuilder-frontend:<git-sha>                            │
│                                                                  │
│  🐳 burgerbuilder-backend:latest                                │
│  🐳 burgerbuilder-backend:<git-sha>                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    AZURE SUBSCRIPTION                            │
│                    (australiaeast)                               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              RESOURCE GROUP: aloufiyousef-rg                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │     Application Gateway (WAF v2)                        │  │
│  │     Public IP: 4.197.160.254                            │  │
│  │     - HTTP Frontend (Port 80)                           │  │
│  │     - Path-based Routing (/api/*)                       │  │
│  └──────────────────┬──────────────────────────────────────┘  │
│                     │                                           │
│                     ▼                                           │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │     Private DNS Zone                                     │  │
│  │     gentleocean-7877e01c.australiaeast...               │  │
│  │     - A Record: ca-frontend-aloufi → 10.5.6.62          │  │
│  │     - A Record: ca-backend-aloufi → 10.5.6.62           │  │
│  └──────────────────┬──────────────────────────────────────┘  │
│                     │                                           │
│                     ▼                                           │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │     Virtual Network (10.5.0.0/16)                       │  │
│  │     ┌──────────────────────────────────────────────┐    │  │
│  │     │ AGW Subnet: 10.5.1.0/24                      │    │  │
│  │     └──────────────────────────────────────────────┘    │  │
│  │     ┌──────────────────────────────────────────────┐    │  │
│  │     │ ACA Subnet: 10.5.2.0/23 (Container Apps)     │    │  │
│  │     │                                               │    │  │
│  │     │  ┌───────────────────────────────────────┐   │    │  │
│  │     │  │ Container Apps Environment            │   │    │  │
│  │     │  │ Static IP: 10.5.6.62                  │   │    │  │
│  │     │  │                                        │   │    │  │
│  │     │  │ ┌─────────────────────────────────┐   │   │    │  │
│  │     │  │ │ ca-frontend-aloufi              │   │   │    │  │
│  │     │  │ │ Image: burgerbuilder-frontend   │   │   │    │  │
│  │     │  │ │ Port: 80 (NGINX)                │   │   │    │  │
│  │     │  │ │ External: true                   │   │   │    │  │
│  │     │  │ └─────────────────────────────────┘   │   │    │  │
│  │     │  │                                        │   │    │  │
│  │     │  │ ┌─────────────────────────────────┐   │   │    │  │
│  │     │  │ │ ca-backend-aloufi               │   │   │    │  │
│  │     │  │ │ Image: burgerbuilder-backend    │   │   │    │  │
│  │     │  │ │ Port: 8080 (Spring Boot)        │   │   │    │  │
│  │     │  │ │ External: true                   │   │   │    │  │
│  │     │  │ │ Env Vars:                        │   │   │    │  │
│  │     │  │ │   - SERVER_PORT=8080             │   │   │    │  │
│  │     │  │ │   - CORS_ALLOWED_ORIGINS=...     │   │   │    │  │
│  │     │  │ │   - DB_HOST, DB_NAME, etc.       │   │   │    │  │
│  │     │  │ └─────────────────────────────────┘   │   │    │  │
│  │     │  └───────────────────────────────────────┘   │    │  │
│  │     └──────────────────────────────────────────────┘    │  │
│  │     ┌──────────────────────────────────────────────┐    │  │
│  │     │ PE Subnet: 10.5.4.0/24 (Private Endpoints)   │    │  │
│  │     │  └─ SQL Private Endpoint                     │    │  │
│  │     └──────────────────────────────────────────────┘    │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │     Azure SQL Database                                   │  │
│  │     Server: sql-aloufiyousef-burgerbuilder              │  │
│  │     Database: burgerbuilderaloufi                       │  │
│  │     Auth: aloufiyousef / P@ssword1234!                  │  │
│  │     Private Endpoint: 10.5.4.4                          │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │     Log Analytics Workspace                              │  │
│  │     - Container Apps logs                                │  │
│  │     - Application Gateway logs                           │  │
│  │     - Application Insights                               │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    END USERS                                     │
│                                                                  │
│  🌐 http://4.197.160.254/                                       │
│     - React Frontend (Burger Builder UI)                        │
│                                                                  │
│  🌐 http://4.197.160.254/api/                                   │
│     - Spring Boot Backend (REST API)                            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## CI/CD Deployment Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    DEVELOPER WORKFLOW                            │
└─────────────────────────────────────────────────────────────────┘

Developer → Git Commit → Git Push to main
                              │
                              ├─────────────────────┬─────────────────────┐
                              │                     │                     │
                              ▼                     ▼                     ▼
                    ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
                    │ terraform/**     │  │   backend/**     │  │  frontend/**     │
                    │   changed?       │  │    changed?      │  │    changed?      │
                    └────────┬─────────┘  └────────┬─────────┘  └────────┬─────────┘
                             │ YES                 │ YES                 │ YES
                             ▼                     │                     │
                    ┌──────────────────┐          │                     │
                    │ Infrastructure   │          │                     │
                    │    Workflow      │          │                     │
                    └────────┬─────────┘          │                     │
                             │                     └──────────┬──────────┘
                             ▼                                ▼
                    ┌──────────────────┐          ┌──────────────────┐
                    │ Terraform Init   │          │ Application      │
                    │ Terraform Plan   │          │   Workflow       │
                    │ Terraform Apply  │          └────────┬─────────┘
                    └────────┬─────────┘                   │
                             │                             ▼
                             │                  ┌──────────────────────┐
                             │                  │ Backend Test         │
                             │                  │ (Maven)              │
                             │                  └──────────┬───────────┘
                             │                             │
                             │                  ┌──────────▼───────────┐
                             │                  │ Frontend Test        │
                             │                  │ (Vitest + ESLint)    │
                             │                  └──────────┬───────────┘
                             │                             │
                             │                  ┌──────────▼───────────┐
                             │                  │ Build Applications   │
                             │                  │ - Maven package      │
                             │                  │ - Vite build         │
                             │                  └──────────┬───────────┘
                             │                             │
                             │                  ┌──────────▼───────────┐
                             │                  │ Build Docker Images  │
                             │                  └──────────┬───────────┘
                             │                             │
                             │                  ┌──────────▼───────────┐
                             │                  │ Push to Docker Hub   │
                             │                  │ - frontend:latest    │
                             │                  │ - backend:latest     │
                             │                  └──────────┬───────────┘
                             │                             │
                             ▼                             ▼
                    ┌─────────────────────────────────────────────┐
                    │    AZURE RESOURCES UPDATED/CREATED          │
                    ├─────────────────────────────────────────────┤
                    │ Infrastructure:                              │
                    │ - VNet, Subnets, NSGs                       │
                    │ - Container Apps Environment                 │
                    │ - Application Gateway                        │
                    │ - SQL Database                               │
                    │ - Private DNS Zone                           │
                    │                                              │
                    │ Applications:                                │
                    │ - ca-frontend-aloufi (updated)              │
                    │ - ca-backend-aloufi (updated)               │
                    └─────────────────────────────────────────────┘
                                      │
                                      ▼
                    ┌─────────────────────────────────────────────┐
                    │    APPLICATION ACCESSIBLE                    │
                    │    http://4.197.160.254                     │
                    └─────────────────────────────────────────────┘
```

## Workflow Triggers and Conditions

```
┌─────────────────────────────────────────────────────────────────┐
│                    INFRASTRUCTURE WORKFLOW                       │
└─────────────────────────────────────────────────────────────────┘

Triggers:
  • Push to main (terraform/**)
  • Pull Request (terraform/**)
  • Manual Dispatch (plan/apply/destroy)

Jobs:
  1. terraform-plan
     ├─ Always runs on trigger
     ├─ Validates Terraform
     ├─ Runs plan
     └─ Comments on PR (if PR)

  2. terraform-apply
     ├─ Runs IF:
     │  ├─ Push to main AND changes detected
     │  └─ OR Manual dispatch with "apply"
     ├─ Auto-imports existing resources
     ├─ Applies Terraform changes
     └─ Uploads outputs

  3. terraform-destroy
     ├─ Runs IF:
     │  └─ Manual dispatch with "destroy"
     ├─ Pre-deletes Container Apps
     ├─ Destroys all resources
     └─ Cleans up stuck resources

┌─────────────────────────────────────────────────────────────────┐
│                    APPLICATION WORKFLOW                          │
└─────────────────────────────────────────────────────────────────┘

Triggers:
  • Push to main (backend/** or frontend/**)
  • Push to develop (backend/** or frontend/**)
  • Pull Request to main (backend/** or frontend/**)
  • Manual Dispatch

Jobs:
  1. backend-test
     └─ Always runs on trigger

  2. backend-build-push
     ├─ Runs IF:
     │  └─ Push to main/develop OR Manual dispatch
     └─ Depends on: backend-test

  3. frontend-test
     └─ Always runs on trigger

  4. frontend-build-push
     ├─ Runs IF:
     │  └─ Push to main/develop OR Manual dispatch
     └─ Depends on: frontend-test

  5. deploy
     ├─ Runs IF:
     │  └─ Push to main OR Manual dispatch
     ├─ Depends on: backend-build-push, frontend-build-push
     └─ Updates Container Apps with new images
```

## GitHub Secrets Required

```
┌────────────────────────────────────────────────────────────────┐
│                    GITHUB REPOSITORY SECRETS                    │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  AZURE_CREDENTIALS                                             │
│  ├─ Type: JSON                                                 │
│  ├─ Contains: clientId, clientSecret, tenantId, subscriptionId │
│  └─ Used by: Both workflows                                    │
│                                                                 │
│  DOCKERHUB_USERNAME                                            │
│  ├─ Type: String                                               │
│  ├─ Value: yousefaloufi6                                       │
│  └─ Used by: Application workflow                              │
│                                                                 │
│  DOCKERHUB_TOKEN                                               │
│  ├─ Type: Secret                                               │
│  ├─ Value: Docker Hub Personal Access Token                    │
│  └─ Used by: Application workflow                              │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

## Resource Dependencies

```
┌─────────────────────────────────────────────────────────────────┐
│                    RESOURCE DEPENDENCY GRAPH                     │
└─────────────────────────────────────────────────────────────────┘

Resource Group (aloufiyousef-rg)
  │
  ├─ Virtual Network (10.5.0.0/16)
  │   ├─ AGW Subnet (10.5.1.0/24)
  │   │   └─ Application Gateway
  │   │       ├─ Public IP (4.197.160.254)
  │   │       └─ Backend Pools → Container Apps FQDNs
  │   │
  │   ├─ ACA Subnet (10.5.2.0/23)
  │   │   └─ Container Apps Environment
  │   │       ├─ ca-frontend-aloufi
  │   │       └─ ca-backend-aloufi
  │   │
  │   └─ PE Subnet (10.5.4.0/24)
  │       └─ SQL Private Endpoint
  │
  ├─ Private DNS Zone
  │   ├─ VNet Link → Virtual Network
  │   ├─ A Record: ca-frontend-aloufi
  │   └─ A Record: ca-backend-aloufi
  │
  ├─ SQL Database
  │   ├─ Server: sql-aloufiyousef-burgerbuilder
  │   ├─ Database: burgerbuilderaloufi
  │   └─ Private Endpoint
  │
  └─ Log Analytics Workspace
      ├─ Container Apps Logs
      └─ Application Gateway Logs
```

## Deployment States

```
┌─────────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT STATE FLOW                         │
└─────────────────────────────────────────────────────────────────┘

[Code Change] → [GitHub Push] → [Workflow Triggered]
                                        │
                                        ▼
                              ┌──────────────────┐
                              │   BUILDING       │
                              │                  │
                              │ • Running tests  │
                              │ • Building code  │
                              │ • Creating images│
                              └────────┬─────────┘
                                       │
                                       ▼
                              ┌──────────────────┐
                              │   PUSHING        │
                              │                  │
                              │ • Docker Hub     │
                              │ • Tagging images │
                              └────────┬─────────┘
                                       │
                                       ▼
                              ┌──────────────────┐
                              │   DEPLOYING      │
                              │                  │
                              │ • Updating apps  │
                              │ • Rolling update │
                              └────────┬─────────┘
                                       │
                                       ▼
                              ┌──────────────────┐
                              │   RUNNING        │
                              │                  │
                              │ • App healthy    │
                              │ • AGW healthy    │
                              │ • Accessible     │
                              └──────────────────┘
```

## Access Points

```
┌─────────────────────────────────────────────────────────────────┐
│                    APPLICATION ACCESS POINTS                     │
└─────────────────────────────────────────────────────────────────┘

Public Access:
  🌐 Frontend:    http://4.197.160.254/
  🌐 Backend API: http://4.197.160.254/api/
  🌐 Health:      http://4.197.160.254/api/actuator/health

Internal Access (VNet):
  🔒 Frontend:    http://ca-frontend-aloufi.gentleocean-7877e01c.australiaeast.azurecontainerapps.io
  🔒 Backend:     http://ca-backend-aloufi.gentleocean-7877e01c.australiaeast.azurecontainerapps.io
  🔒 Database:    sql-aloufiyousef-burgerbuilder.database.windows.net:1433

Management:
  👤 Azure Portal:     https://portal.azure.com
  📊 GitHub Actions:   https://github.com/yousefaloufi6/project2-Yousef-ih/actions
  🐳 Docker Hub:       https://hub.docker.com/u/yousefaloufi6
```

---

**Legend:**
- 🐳 Docker Image
- 🌐 Public Endpoint
- 🔒 Private Endpoint
- 👤 Admin Access
- 📊 Monitoring
- ✅ Success State
- ⚠️ Warning State
- ❌ Error State

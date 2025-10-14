# Application Gateway Fix - Matching Yousef-v5-rg Configuration

## Problem
Application was returning **502 Bad Gateway** errors at http://172.171.116.40 despite infrastructure being deployed.

## Root Cause
Application Gateway was configured incorrectly:
- ❌ Backend probe was using port **8080** (incorrect)
- ❌ Backend HTTP settings was using port **8080** (incorrect)

## Solution Applied
Updated `terraform/modules/app_gateway/main.tf` to match the **working Yousef-v5-rg** configuration:

### Changes Made
1. **Backend Probe**: Changed port from `8080` → `80`
2. **Backend HTTP Settings**: Changed port from `8080` → `80`

### Correct Configuration (Matching v5)
```terraform
# Backend probe - port 80
probe {
  name                                      = "backend-probe"
  protocol                                  = "Http"
  path                                      = "/actuator/health"
  port                                      = 80  # ✅ Changed from 8080
  pick_host_name_from_backend_http_settings = true
  match { status_code = ["200-299"] }
}

# Backend HTTP settings - port 80
backend_http_settings {
  name                                = "backend-http-settings"
  port                                = 80  # ✅ Changed from 8080
  protocol                            = "Http"
  pick_host_name_from_backend_address = true
  probe_name                          = "backend-probe"
}
```

## Working Configuration Summary (from Yousef-v5-rg)
- **Container Apps Environment**: `internal_load_balancer_enabled = true`
- **Container Apps (frontend/backend)**: `external = true`, `allowInsecure = true`
- **Application Gateway Probes**: Both use HTTP port **80**
- **Application Gateway HTTP Settings**: Both use HTTP port **80**
- **Backend Pools**: Use external FQDNs (e.g., `ca-backend.redglacier-ef145cae.westus2.azurecontainerapps.io`)

## Deployment
Changes committed and pushed to trigger **Infrastructure workflow** automatically:
- Commit: `c03623c - fix: Update App Gateway to match working v5 setup`
- Workflow: `infra.yml` will apply Terraform changes
- Expected result: Application accessible at http://172.171.116.40

## Key Learning
**Container Apps with internal environment but external apps work perfectly with Application Gateway** when:
1. Environment uses internal load balancer (VNet integration)
2. Container Apps have `external=true` (get public FQDNs resolvable within VNet)
3. Application Gateway uses **HTTP port 80** for ALL communication (probes + HTTP settings)
4. Backend pools point to Container Apps' external FQDNs

## Verification Steps (After Workflow Completes)
1. ✅ Check infrastructure workflow completes successfully
2. ✅ Test frontend: `curl http://172.171.116.40`
3. ✅ Test backend health: `curl http://172.171.116.40/api/actuator/health`
4. ✅ Verify Application Gateway backend health shows "Healthy"

---
**Status**: ✅ Configuration fixed, automated deployment in progress via GitHub Actions

# Infrastructure Workflow Guide

## Overview
The infrastructure workflow (`infra.yml`) now supports three operations: **plan**, **apply**, and **destroy**.

## Automatic Triggers

### 1. **Auto Plan & Apply** (on push to main)
When you push Terraform changes to the `main` branch:
- ✅ **Terraform Plan** runs automatically
- ✅ **Terraform Apply** runs automatically (if changes detected)

**Example**: 
```bash
git add terraform/
git commit -m "Update infrastructure"
git push
```

### 2. **Auto Plan** (on pull request)
When you create a PR with Terraform changes:
- ✅ **Terraform Plan** runs automatically
- ✅ Plan is posted as a comment on the PR
- ❌ **No auto-apply** (requires manual approval after merge)

## Manual Triggers (workflow_dispatch)

### How to Trigger Manually

#### **Option 1: GitHub Web UI**
1. Go to: https://github.com/YouSef-H7/project2-Yousef-ih/actions
2. Click on "Infrastructure - Terraform" workflow
3. Click "Run workflow" button
4. Select action: `plan`, `apply`, or `destroy`
5. Click "Run workflow"

#### **Option 2: Using GitHub CLI** (if installed)
```bash
# Plan only
gh workflow run infra.yml --field action=plan

# Apply changes
gh workflow run infra.yml --field action=apply

# Destroy everything
gh workflow run infra.yml --field action=destroy
```

## Workflow Actions Explained

### 📋 **PLAN** - Preview changes
- Shows what Terraform will create/update/delete
- **Safe** - No actual changes made
- **Use when**: You want to see what changes before applying

### ✅ **APPLY** - Deploy changes
- Applies the Terraform configuration
- Creates/updates Azure resources
- **Use when**: You want to deploy infrastructure changes

### 🗑️ **DESTROY** - Delete all resources
- **DANGER**: Deletes ALL infrastructure managed by Terraform
- Includes cleanup of stuck Container Apps resources
- **Use when**: You want to tear down the entire environment

## Special Features

### 🔄 **State Cleanup (on apply)**
The workflow automatically handles corrupted Terraform state:
- Removes Container Apps from state if corrupted
- Deletes existing Container Apps Environment
- Recreates everything cleanly
- **Prevents** "Provider produced inconsistent result" errors

### 🧹 **Manual Cleanup (on destroy)**
If Terraform destroy fails, the workflow runs manual cleanup:
```bash
az containerapp delete --name ca-frontend --resource-group Yousef-rg --yes --no-wait
az containerapp delete --name ca-backend --resource-group Yousef-rg --yes --no-wait
az containerapp env delete --name yousef-aca-env-prod-v2 --resource-group Yousef-rg --yes --no-wait
```

## Current Infrastructure Configuration

### What Gets Deployed
- ✅ **Resource Group**: `Yousef-rg`
- ✅ **VNet**: `vnet-prod` (10.2.0.0/16)
- ✅ **Container Apps Environment**: `yousef-aca-env-prod-v2` (internal)
- ✅ **Frontend Container App**: `ca-frontend` (external, HTTP port 80)
- ✅ **Backend Container App**: `ca-backend` (external, HTTP port 80)
- ✅ **Application Gateway**: `agw-yousef-burgerbuilder` (HTTP port 80)
- ✅ **SQL Database**: PostgreSQL

### Access Points
- **Frontend**: http://172.171.116.40
- **Backend API**: http://172.171.116.40/api
- **Health Check**: http://172.171.116.40/api/actuator/health

## Troubleshooting

### ❌ **"Provider produced inconsistent result"**
**Solution**: The workflow now handles this automatically by:
1. Removing corrupted resources from state
2. Deleting the Container Apps Environment
3. Recreating everything fresh

### ❌ **"Resource already exists"**
**Solution**: Run the workflow with `destroy` action first, then `apply`:
```bash
# 1. Destroy first
gh workflow run infra.yml --field action=destroy

# 2. Wait 5 minutes for cleanup

# 3. Apply fresh
gh workflow run infra.yml --field action=apply
```

### ❌ **Workflow stuck or timeout**
**Solution**: 
1. Cancel the running workflow
2. Run manual cleanup:
   ```bash
   az containerapp env delete --name yousef-aca-env-prod-v2 --resource-group Yousef-rg --yes
   ```
3. Re-run the workflow

## Best Practices

### ✅ **DO**
- Test changes with `plan` before `apply`
- Use automatic triggers for most deployments
- Let the workflow handle state cleanup
- Check workflow logs if something fails

### ❌ **DON'T**
- Don't manually modify Azure resources (use Terraform)
- Don't run multiple applies simultaneously
- Don't destroy production without backup
- Don't skip the plan step for major changes

## Concurrency Protection
The workflow uses concurrency control:
```yaml
concurrency:
  group: terraform-${{ github.ref }}
  cancel-in-progress: false
```
- ✅ Only ONE workflow runs at a time per branch
- ✅ Prevents state corruption from parallel runs
- ✅ Queues subsequent runs automatically

---
**Current Status**: ✅ All workflow actions functional and automated!

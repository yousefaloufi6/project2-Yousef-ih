# Quick Start: GitHub Secrets Setup

This guide helps you quickly set up the required GitHub Secrets for CI/CD.

## Step 1: Create Azure Service Principal

Open PowerShell and run:

```powershell
# Login to Azure
az login

# Get your subscription ID
$subscriptionId = az account show --query id -o tsv
Write-Host "Subscription ID: $subscriptionId"

# Create Service Principal with Contributor role
az ad sp create-for-rbac --name "github-actions-aloufi-burgerbuilder" `
  --role contributor `
  --scopes "/subscriptions/$subscriptionId" `
  --sdk-auth
```

**Important:** Copy the entire JSON output! It looks like this:

```json
{
  "clientId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "clientSecret": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "subscriptionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "tenantId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "activeDirectoryEndpointUrl": "https://login.microsoftonline.com",
  "resourceManagerEndpointUrl": "https://management.azure.com/",
  "activeDirectoryGraphResourceId": "https://graph.windows.net/",
  "sqlManagementEndpointUrl": "https://management.core.windows.net:8443/",
  "galleryEndpointUrl": "https://gallery.azure.com/",
  "managementEndpointUrl": "https://management.core.windows.net/"
}
```

## Step 2: Create Docker Hub Access Token

1. Go to [Docker Hub](https://hub.docker.com/)
2. Login with username: `yousefaloufi6`
3. Click on your profile → Account Settings → Security
4. Click "New Access Token"
5. Name: `github-actions-aloufi`
6. Access permissions: Read, Write, Delete
7. Click "Generate"
8. **Copy the token immediately!** (You can't see it again)

## Step 3: Add Secrets to GitHub

### Navigate to Repository Settings

1. Go to your GitHub repository: `https://github.com/yousefaloufi6/project2-Yousef-ih`
2. Click **Settings** tab
3. In left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**

### Add Each Secret

#### Secret 1: AZURE_CREDENTIALS

- **Name:** `AZURE_CREDENTIALS`
- **Value:** Paste the entire JSON output from Step 1 (including the curly braces)
- Click **Add secret**

#### Secret 2: DOCKERHUB_USERNAME

- **Name:** `DOCKERHUB_USERNAME`
- **Value:** `yousefaloufi6`
- Click **Add secret**

#### Secret 3: DOCKERHUB_TOKEN

- **Name:** `DOCKERHUB_TOKEN`
- **Value:** Paste the Docker Hub token from Step 2
- Click **Add secret**

## Step 4: Verify Secrets

After adding all secrets, you should see:

✅ `AZURE_CREDENTIALS`  
✅ `DOCKERHUB_USERNAME`  
✅ `DOCKERHUB_TOKEN`

## Step 5: Test CI/CD

### Test Infrastructure Workflow

```powershell
# Make a small change to trigger workflow
cd terraform/main
# Edit a comment or README
git add .
git commit -m "Test infrastructure workflow"
git push origin main
```

Go to GitHub → Actions tab → Watch "Infrastructure - Terraform" workflow run

### Test Application Workflow

```powershell
# Make a small change to trigger workflow
cd frontend
# Edit a comment or README
git add .
git commit -m "Test application workflow"
git push origin main
```

Go to GitHub → Actions tab → Watch "Application - Backend & Frontend" workflow run

## Troubleshooting

### Error: "AZURE_CREDENTIALS secret not found"

**Solution:** Make sure the secret name is exactly `AZURE_CREDENTIALS` (all caps, with underscore)

### Error: "DOCKERHUB_TOKEN secret not found"

**Solution:** Make sure the secret name is exactly `DOCKERHUB_TOKEN` (all caps, with underscore)

### Error: "Service Principal authentication failed"

**Solution:** 
1. Verify the JSON is complete and valid
2. Check Service Principal has Contributor role:
```powershell
az role assignment list --assignee "CLIENT_ID" --output table
```

### Error: "Docker login failed"

**Solution:**
1. Verify Docker Hub token is still valid
2. Create a new token if needed
3. Update GitHub secret

## Security Best Practices

### DO:
✅ Store Service Principal credentials only in GitHub Secrets  
✅ Rotate Service Principal secrets regularly  
✅ Use Docker Hub tokens (not password)  
✅ Limit Service Principal scope to specific subscription  

### DON'T:
❌ Never commit secrets to repository  
❌ Never share Service Principal credentials  
❌ Never use your personal password for Docker Hub  
❌ Never give Service Principal more permissions than needed  

## Clean Up (Optional)

If you need to remove the Service Principal later:

```powershell
# List Service Principals
az ad sp list --display-name "github-actions-aloufi-burgerbuilder" --query "[].{Name:displayName,AppId:appId}" -o table

# Delete Service Principal
az ad sp delete --id "APP_ID"
```

## Next Steps

After setting up secrets:

1. ✅ Secrets configured → Read `CI_CD_SETUP.md` for full documentation
2. ✅ Test workflows → Push a change and watch Actions tab
3. ✅ Deploy infrastructure → Run Infrastructure workflow
4. ✅ Deploy application → Run Application workflow
5. ✅ Access application → Visit `http://4.197.160.254`

## Quick Reference

| Secret Name | Description | Where to Get |
|-------------|-------------|--------------|
| `AZURE_CREDENTIALS` | Service Principal JSON | `az ad sp create-for-rbac --sdk-auth` |
| `DOCKERHUB_USERNAME` | Docker Hub username | `yousefaloufi6` |
| `DOCKERHUB_TOKEN` | Docker Hub access token | Docker Hub → Account Settings → Security |

---

**Need Help?** Check `CI_CD_SETUP.md` for detailed documentation.

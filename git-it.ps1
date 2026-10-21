param(
    [Parameter(Mandatory=$true)]
    [string]$Message
)

Write-Host "→ Running lint..." -ForegroundColor Cyan
npm run lint
if ($LASTEXITCODE -ne 0) { Write-Host "Lint failed. Aborting." -ForegroundColor Red; exit 1 }

Write-Host "→ Running build..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed. Aborting." -ForegroundColor Red; exit 1 }

Write-Host "→ Committing & pushing..." -ForegroundColor Cyan
git add .
git commit -m $Message
git push

Write-Host "Done." -ForegroundColor Green
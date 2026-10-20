param(
    [Parameter(Mandatory=$true)]
    [string]$Message
)

Write-Host "→ Running lint..." -ForegroundColor Cyan
npm run lint
if (-not $?) { Write-Host "Lint failed. Aborting." -ForegroundColor Red; exit 1 }

Write-Host "→ Running build..." -ForegroundColor Cyan
npm run build
if (-not $?) { Write-Host "Build failed. Aborting." -ForegroundColor Red; exit 1 }

Write-Host "→ Committing & pushing..." -ForegroundColor Cyan
if (-not $Message) { Write-Host "No commit message supplied. Aborting." -ForegroundColor Red; exit 1 }
git add .
git commit -m $Message
git push

Write-Host "Done." -ForegroundColor Green
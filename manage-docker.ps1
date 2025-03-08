param (
     [Parameter(Mandatory=$true)]
     [ValidateSet("start", "stop", "restart", "logs", "status", "clean")]
     [string]$Action
 )
 
 $projectName = "GichevaArtAI"
 
 function Start-Containers {
     Write-Host "Starting $projectName containers..." -ForegroundColor Green
     docker-compose up -d
     if ($LASTEXITCODE -eq 0) {
         Write-Host "Containers started successfully!" -ForegroundColor Green
         Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
         Write-Host "Backend API: http://localhost:5000" -ForegroundColor Cyan
     } else {
         Write-Host "Failed to start containers." -ForegroundColor Red
     }
 }
 
 function Stop-Containers {
     Write-Host "Stopping $projectName containers..." -ForegroundColor Yellow
     docker-compose down
     if ($LASTEXITCODE -eq 0) {
         Write-Host "Containers stopped successfully!" -ForegroundColor Green
     } else {
         Write-Host "Failed to stop containers." -ForegroundColor Red
     }
 }
 
 function Restart-Containers {
     Stop-Containers
     Start-Sleep -Seconds 2
     Start-Containers
 }
 
 function Show-Logs {
     Write-Host "Showing logs for $projectName containers..." -ForegroundColor Cyan
     docker-compose logs
 }
 
 function Show-Status {
     Write-Host "Status of $projectName containers:" -ForegroundColor Cyan
     Write-Host "Running containers:" -ForegroundColor Green
     docker ps --filter "name=$projectName"
     
     Write-Host "`nAll containers (including stopped):" -ForegroundColor Yellow
     docker ps -a --filter "name=$projectName"
     
     Write-Host "`nContainer health check:" -ForegroundColor Cyan
     try {
         $frontendStatus = Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing -TimeoutSec 2
         Write-Host "Frontend: " -NoNewline
         Write-Host "OK (Status: $($frontendStatus.StatusCode))" -ForegroundColor Green
     } catch {
         Write-Host "Frontend: " -NoNewline
         Write-Host "Not responding" -ForegroundColor Red
     }
     
     try {
         $backendStatus = Invoke-WebRequest -Uri "http://localhost:5000/api/health" -UseBasicParsing -TimeoutSec 2
         Write-Host "Backend API: " -NoNewline
         Write-Host "OK (Status: $($backendStatus.StatusCode))" -ForegroundColor Green
     } catch {
         Write-Host "Backend API: " -NoNewline
         Write-Host "Not responding" -ForegroundColor Red
     }
 }
 
 function Remove-Environment {
     Write-Host "Cleaning up $projectName environment..." -ForegroundColor Yellow
     docker-compose down -v
     if ($LASTEXITCODE -eq 0) {
         Write-Host "Environment cleaned successfully!" -ForegroundColor Green
     } else {
         Write-Host "Failed to clean environment." -ForegroundColor Red
     }
 }
 
 switch ($Action) {
     "start" { Start-Containers }
     "stop" { Stop-Containers }
     "restart" { Restart-Containers }
     "logs" { Show-Logs }
     "status" { Show-Status }
     "clean" { Remove-Environment }
 }
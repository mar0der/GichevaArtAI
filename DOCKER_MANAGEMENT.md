# Docker Management for GichevaArtAI
 
 This document provides instructions for managing the GichevaArtAI Docker containers using the provided PowerShell script.
 
 ## Prerequisites
 
 - Windows with PowerShell
 - Docker Desktop installed and running
 - Docker Compose installed
 
 ## Using the Management Script
 
 The `manage-docker.ps1` script provides a convenient way to manage the GichevaArtAI Docker containers. It supports the following actions:
 
 ### Starting the Containers
 
 ```powershell
 .\manage-docker.ps1 -Action start
 ```
 
 This command will build (if necessary) and start the containers in detached mode.
 
 ### Stopping the Containers
 
 ```powershell
 .\manage-docker.ps1 -Action stop
 ```
 
 This command will stop and remove the containers, but preserve the volumes.
 
 ### Restarting the Containers
 
 ```powershell
 .\manage-docker.ps1 -Action restart
 ```
 
 This command will stop and then start the containers.
 
 ### Viewing Container Logs
 
 ```powershell
 .\manage-docker.ps1 -Action logs
 ```
 
 This command will display the logs from all containers.
 
 ### Checking Container Status
 
 ```powershell
 .\manage-docker.ps1 -Action status
 ```
 
 This command will display:
 - Running containers
 - All containers (including stopped ones)
 - Health check results for the frontend and backend
 
 ### Cleaning Up the Environment
 
 ```powershell
 .\manage-docker.ps1 -Action clean
 ```
 
 This command will stop and remove the containers, as well as remove the volumes. Use with caution as this will delete all data.
 
 ## Accessing the Application
 
 After starting the containers, you can access the application at:
 
 - Frontend: http://localhost:3000
 - Backend API: http://localhost:5000
 - MongoDB (for development): mongodb://localhost:27017
 
 ## Troubleshooting
 
 If you encounter issues:
 
 1. Make sure Docker Desktop is running
 2. Check the container logs using `.\manage-docker.ps1 -Action logs`
 3. Try restarting the containers using `.\manage-docker.ps1 -Action restart`
 4. If all else fails, clean up and start fresh using `.\manage-docker.ps1 -Action clean` followed by `.\manage-docker.ps1 -Action start`
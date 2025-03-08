#!/bin/bash
 
 # Switch between development and production Docker environments
 # Usage: ./switch-env.sh [dev|prod]
 
 if [ "$1" = "dev" ]; then
     echo "Switching to development environment..."
     echo "Stopping any running containers..."
     docker-compose down
     
     echo "Starting development environment..."
     docker-compose up --build
 elif [ "$1" = "prod" ]; then
     echo "Switching to production environment..."
     echo "Stopping any running containers..."
     docker-compose down
     
     echo "Starting production environment..."
     docker-compose -f docker-compose.prod.yml up --build -d
     
     echo "Production environment started in detached mode."
     echo "To view logs, run: docker-compose -f docker-compose.prod.yml logs -f"
 else
     echo "Usage: ./switch-env.sh [dev|prod]"
     echo "  dev  - Start development environment with hot reloading"
     echo "  prod - Start production environment"
 fi
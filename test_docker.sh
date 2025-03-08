#!/bin/bash
 
 echo "Building and starting GichevaArtAI container..."
 docker-compose up --build -d
 
 echo "Waiting for services to start..."
 sleep 10
 
 echo "Testing Flask API health endpoint..."
 curl -s http://localhost:5000/api/health
 
 echo -e "\n\nTesting Next.js frontend..."
 curl -s -I http://localhost:3000
 
 echo -e "\n\nContainer logs:"
 docker-compose logs --tail=20
 
 echo -e "\n\nTo stop the container, run: docker-compose down"
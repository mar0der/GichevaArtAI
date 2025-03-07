@echo off
echo Building and starting GichevaArtAI container...
docker-compose up --build -d

echo.
echo Container is running in the background.
echo.
echo Frontend: http://localhost:3000
echo Backend API: http://localhost:5000
echo.
echo To view logs, run: docker-compose logs -f
echo To stop the container, run: docker-compose down
echo.
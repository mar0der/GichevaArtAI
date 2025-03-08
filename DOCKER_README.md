# Docker Setup for GichevaArtAI

This document provides instructions for setting up and running the GichevaArtAI application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed on your system

## Container Structure

The GichevaArtAI container includes:

1. **Next.js Frontend**: A React-based web application for showcasing and selling paintings
2. **Flask Backend API**: A Python-based API for handling data and business logic
3. **MongoDB Database**: For storing application data

## Development Environment

The development environment is configured to support live code reloading. Source code directories are mounted as volumes, so any changes you make to your code will be automatically reflected in the running application.

### Running in Development Mode

To start the development environment:

```bash
docker-compose up --build
```

This will:
- Mount your frontend and backend code directories as volumes
- Start Next.js in development mode with hot reloading
- Start Flask in development mode with auto-reloading
- Set up MongoDB with a persistent volume

While in development mode:
- Frontend changes will be automatically applied (Next.js hot reloading)
- Backend changes will trigger an automatic restart of the Flask server
- No need to rebuild containers for code changes

### Accessing the Development Environment

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: mongodb://localhost:27017

## Production Environment

For production deployment, use the production Docker Compose configuration:

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

The production setup:
- Builds optimized, static versions of the frontend
- Configures the backend for production use
- Minimizes logging and debugging features

## Running the Production Container

To build and start the production container, run:

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

## Accessing the Production Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB (if needed): mongodb://localhost:27017

## Testing the Setup

You can test if the setup is working correctly by running:

```bash
# On Linux/Mac
chmod +x test_docker.sh
./test_docker.sh

# On Windows
bash test_docker.sh
```

## Stopping the Container

To stop the container, run:

```bash
docker-compose down
```

## Volume Data

The container uses the following volumes:

1. `mongodb_data`: For persisting MongoDB data
2. `uploads`: For storing uploaded images
3. `./frontend:/app/frontend`: (Development only) For mounting frontend source code
4. `./backend:/app/backend`: (Development only) For mounting backend source code

## Environment Variables

The following environment variables are set in the container:

- `NODE_ENV`: Environment for Next.js (development/production)
- `MONGODB_URI`: MongoDB connection string
- `FLASK_ENV`: Environment for Flask (development/production)
- `FLASK_APP`: Path to the Flask application
- `NEXT_PUBLIC_API_URL`: URL for the frontend to access the API
- `WATCHPACK_POLLING`: (Development only) Enables file watching for hot reloading

## Troubleshooting

If you encounter issues:

1. Check the container logs: `docker-compose logs`
2. Ensure all ports (3000, 5000, 27017) are available on your system
3. Verify that Docker has sufficient resources allocated
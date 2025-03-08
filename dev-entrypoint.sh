#!/bin/sh
set -e

# Start Flask backend in development mode with hot reloading (background)
cd /app/backend
echo "Starting Flask backend in development mode..."
flask run --host=0.0.0.0 --port=5000 --debug &

# Start Next.js frontend in development mode with hot reloading
cd /app/frontend
echo "Starting Next.js frontend in development mode..."
npm run dev -- -p 3000

# Keep container running if either service fails
wait
#!/bin/sh
set -e

# Wait for MongoDB to be ready
echo "Waiting for MongoDB to be ready..."
until curl -s http://mongodb:27017 > /dev/null; do
  echo "MongoDB is unavailable - sleeping"
  sleep 1
done
echo "MongoDB is up and running!"

# Initialize the database with sample data
echo "Initializing database with sample data..."
cd /app/backend
python init_db.py

# Start Flask backend (background)
cd /app/backend
echo "Starting Flask backend in production mode..."
gunicorn --bind 0.0.0.0:5000 --workers 4 app:app &

# Start Next.js frontend
cd /app/frontend
echo "Starting Next.js frontend in production mode..."
npm start

# Keep container running if either service fails
wait
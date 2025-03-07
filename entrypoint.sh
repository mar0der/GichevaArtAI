#!/bin/bash
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

# Start Flask backend in the background
echo "Starting Flask backend..."
python app.py &

# Start Next.js frontend
echo "Starting Next.js frontend..."
cd /app/frontend
npm start

# Keep container running
tail -f /dev/null
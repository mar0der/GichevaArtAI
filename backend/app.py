from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import sys
from pymongo import MongoClient
import json

app = Flask(__name__)
# Make CORS completely permissive for troubleshooting
CORS(app, origins="*", allow_headers=["*"], supports_credentials=True)

# Connect to MongoDB with better error handling
mongo_uri = os.environ.get('MONGODB_URI', 'mongodb://localhost:27017/gichevaart')
try:
    print(f"Connecting to MongoDB at: {mongo_uri}")
    client = MongoClient(mongo_uri, serverSelectionTimeoutMS=5000)
    # Verify connection works
    client.server_info()
    db = client.get_database()
    print("Successfully connected to MongoDB")
except Exception as e:
    print(f"ERROR: Could not connect to MongoDB: {e}", file=sys.stderr)
    print("The application will continue, but database functionality will not work correctly.")
    db = None

@app.route('/api/health', methods=['GET'])
def health_check():
    db_status = "connected" if db is not None else "disconnected"
    return jsonify({
        "status": "healthy", 
        "message": "GichevaArtAI API is running",
        "database": db_status
    })

@app.route('/api/paintings', methods=['GET'])
def get_paintings():
    if db is None:
        return jsonify({"error": "Database connection is not available"}), 500
        
    try:
        # Get query parameters for filtering
        category = request.args.get('category')
        available_only = request.args.get('available') == 'true'
        sort_by = request.args.get('sort_by', 'title')  # Default sort by title
        
        # Build query filters
        filters = {}
        if category:
            filters["category"] = category
        if available_only:
            filters["available"] = True
            
        # Get paintings with filters
        paintings = list(db.paintings.find(filters, {'_id': False}))
        
        # Show how many paintings were found
        print(f"Found {len(paintings)} paintings matching filters: {filters}")
        
        # Sort results
        if sort_by == 'price_asc':
            paintings.sort(key=lambda x: x.get('price', 0))
        elif sort_by == 'price_desc':
            paintings.sort(key=lambda x: x.get('price', 0), reverse=True)
        elif sort_by == 'title':
            paintings.sort(key=lambda x: x.get('title', '').lower())
        
        return jsonify(paintings)
    except Exception as e:
        print(f"Error fetching paintings: {e}", file=sys.stderr)
        return jsonify({"error": str(e)}), 500

@app.route('/api/paintings/<painting_id>', methods=['GET'])
def get_painting(painting_id):
    if db is None:
        return jsonify({"error": "Database connection is not available"}), 500
        
    try:
        painting = db.paintings.find_one({"id": painting_id}, {'_id': False})
        if painting:
            return jsonify(painting)
        return jsonify({"error": "Painting not found"}), 404
    except Exception as e:
        print(f"Error fetching painting {painting_id}: {e}", file=sys.stderr)
        return jsonify({"error": str(e)}), 500

@app.route('/api/categories', methods=['GET'])
def get_categories():
    if db is None:
        return jsonify({"error": "Database connection is not available"}), 500
        
    try:
        # Get distinct categories from the paintings collection
        categories = db.paintings.distinct("category")
        return jsonify(categories)
    except Exception as e:
        print(f"Error fetching categories: {e}", file=sys.stderr)
        return jsonify({"error": str(e)}), 500

@app.route('/api/database-info', methods=['GET'])
def database_info():
    """Endpoint to check database status and info for troubleshooting"""
    if db is None:
        return jsonify({"status": "disconnected", "error": "Database connection is not available"}), 500
        
    try:
        # Get database stats
        collections = db.list_collection_names()
        paintings_count = db.paintings.count_documents({})
        
        return jsonify({
            "status": "connected",
            "database": db.name,
            "collections": collections,
            "paintings_count": paintings_count
        })
    except Exception as e:
        print(f"Error fetching database info: {e}", file=sys.stderr)
        return jsonify({"status": "error", "error": str(e)}), 500

if __name__ == '__main__':
    # Create uploads directory if it doesn't exist
    os.makedirs('/app/uploads', exist_ok=True)
    
    # Run the Flask app
    app.run(host='0.0.0.0', port=5000)
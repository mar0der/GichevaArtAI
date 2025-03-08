from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from pymongo import MongoClient
import json

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
mongo_uri = os.environ.get('MONGODB_URI', 'mongodb://localhost:27017/gichevaart')
client = MongoClient(mongo_uri)
db = client.get_database()

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "message": "GichevaArtAI API is running"})

@app.route('/api/paintings', methods=['GET'])
def get_paintings():
    paintings = list(db.paintings.find({}, {'_id': False}))
    return jsonify(paintings)

@app.route('/api/paintings/<painting_id>', methods=['GET'])
def get_painting(painting_id):
    painting = db.paintings.find_one({"id": painting_id}, {'_id': False})
    if painting:
        return jsonify(painting)
    return jsonify({"error": "Painting not found"}), 404

if __name__ == '__main__':
    # Create uploads directory if it doesn't exist
    os.makedirs('/app/uploads', exist_ok=True)
    
    # Run the Flask app
    app.run(host='0.0.0.0', port=5000)
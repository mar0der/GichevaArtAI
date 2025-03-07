from pymongo import MongoClient
import os
import json

# Connect to MongoDB
mongo_uri = os.environ.get('MONGODB_URI', 'mongodb://localhost:27017/gichevaart')
client = MongoClient(mongo_uri)
db = client.get_database()

# Sample paintings data
paintings = [
    {
        "id": "1",
        "title": "Sunset Over Mountains",
        "description": "A beautiful sunset scene over mountain ranges.",
        "price": 1200.00,
        "dimensions": "24x36 inches",
        "medium": "Oil on canvas",
        "category": "Landscape",
        "image_url": "/images/paintings/sunset.jpg",
        "available": True,
        "created_at": "2023-01-15"
    },
    {
        "id": "2",
        "title": "Abstract Harmony",
        "description": "An abstract composition with harmonious colors and shapes.",
        "price": 950.00,
        "dimensions": "30x30 inches",
        "medium": "Acrylic on canvas",
        "category": "Abstract",
        "image_url": "/images/paintings/abstract.jpg",
        "available": True,
        "created_at": "2023-03-22"
    },
    {
        "id": "3",
        "title": "Coastal Dreams",
        "description": "A serene coastal scene with waves crashing on the shore.",
        "price": 1500.00,
        "dimensions": "36x48 inches",
        "medium": "Oil on canvas",
        "category": "Seascape",
        "image_url": "/images/paintings/coastal.jpg",
        "available": True,
        "created_at": "2023-05-10"
    }
]

# Initialize the database with sample data
def init_db():
    # Drop existing collections
    db.paintings.drop()
    
    # Create collections and insert sample data
    db.paintings.insert_many(paintings)
    
    print("Database initialized with sample data.")
    print(f"Inserted {len(paintings)} paintings.")

if __name__ == "__main__":
    init_db()
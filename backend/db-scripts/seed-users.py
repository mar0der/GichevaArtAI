#!/usr/bin/env python3

import os
import sys
import argparse
from pymongo import MongoClient
from werkzeug.security import generate_password_hash
from datetime import datetime

# Parse command line arguments
parser = argparse.ArgumentParser(description='Seed admin user for Gicheva Art application')
parser.add_argument('--non-interactive', action='store_true', help='Run in non-interactive mode (for automated startup)')
parser.add_argument('--force', action='store_true', help='Force recreate admin user even if it exists')
args = parser.parse_args()

# Get MongoDB connection string from environment or use default
mongo_uri = os.environ.get('MONGODB_URI', 'mongodb://localhost:27017/gichevaart')

# Connect to MongoDB
try:
    print(f"Connecting to MongoDB at: {mongo_uri}")
    client = MongoClient(mongo_uri, serverSelectionTimeoutMS=5000)
    # Verify connection works
    client.server_info()
    db = client.get_database()
    print("Successfully connected to MongoDB")
except Exception as e:
    print(f"ERROR: Could not connect to MongoDB: {e}", file=sys.stderr)
    sys.exit(1)

# Check if users collection exists and create admin user if not exists
if 'users' not in db.list_collection_names():
    print("Creating users collection...")
    db.create_collection('users')

# Count existing admin users
admin_count = db.users.count_documents({'email': 'admin@website.com'})
if admin_count > 0:
    print(f"Admin user already exists. Found {admin_count} admin users.")
    
    # In non-interactive mode with force flag, recreate user
    if args.non_interactive and args.force:
        db.users.delete_many({'email': 'admin@website.com'})
        print("Existing admin user deleted (forced).")
    # In non-interactive mode without force flag, exit
    elif args.non_interactive:
        print("Keeping existing admin user (non-interactive mode).")
        sys.exit(0)
    # In interactive mode, prompt user
    else:
        should_proceed = input("Do you want to recreate the admin user? (y/n): ").lower()
        if should_proceed != 'y':
            print("Exiting without changes.")
            sys.exit(0)
        else:
            # Delete existing admin user
            db.users.delete_many({'email': 'admin@website.com'})
            print("Existing admin user deleted.")

# Create admin user
admin_user = {
    'email': 'admin@website.com',
    'password': generate_password_hash('123456'),
    'role': 'admin',
    'created_at': datetime.utcnow()
}

result = db.users.insert_one(admin_user)
print(f"Admin user created successfully with ID: {result.inserted_id}")
print("Login credentials:")
print("  Email: admin@website.com")
print("  Password: 123456") 
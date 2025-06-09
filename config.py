import os
from pathlib import Path

# Base directory configuration
BASE_DIR = Path(__file__).resolve().parent

# Database configuration - Using SQLite
DATABASE_URL = "sqlite:///./cyfuture.db"

# API configuration
API_PREFIX = "/api/v1"
DEBUG = True

# File upload configuration
UPLOAD_FOLDER = "uploads"
ALLOWED_EXTENSIONS = {'pdf', 'png', 'jpg', 'jpeg'}

# JWT configuration for user authentication
JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your-secret-key')  # Change this in production!
JWT_ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30 
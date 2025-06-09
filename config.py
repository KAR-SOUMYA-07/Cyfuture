import os
from pathlib import Path

# Base directory configuration
BASE_DIR = Path(__file__).resolve().parent

# Database configuration - Using SQLite for development, PostgreSQL for production
DATABASE_URL = os.getenv('DATABASE_URL', "sqlite:///./cyfuture.db")

# API configuration
API_PREFIX = "/api/v1"
DEBUG = os.getenv('ENVIRONMENT', 'development') != 'production'

# File upload configuration
UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploaded_invoices")
ALLOWED_EXTENSIONS = {'pdf', 'png', 'jpg', 'jpeg'}

# JWT configuration for user authentication
JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your-secret-key')  # Change this in production!
JWT_ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# CORS configuration
CORS_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:8080",
    "http://localhost:5173",
    "https://cyfuture.vercel.app",  # Add your Vercel domain
]

# Vercel specific configurations
VERCEL_ENV = os.getenv('VERCEL_ENV', 'development')
VERCEL_URL = os.getenv('VERCEL_URL', 'http://localhost:8000') 
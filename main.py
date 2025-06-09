from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import invoice_routes, gst_routes, user_routes
from models.user import Base
from sqlalchemy import create_engine
from config import DATABASE_URL

# Create database engine
engine = create_engine(DATABASE_URL)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Cyfuture API")

# Allow frontend (React) to access backend APIs
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # React default port
        "http://localhost:8080",  # Vite dev server
        "http://localhost:5173",  # Vite default port
        "http://127.0.0.1:8080",  # Vite dev server alternative
        "http://127.0.0.1:5173",  # Vite default port alternative
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(user_routes.router, prefix="/api")
app.include_router(invoice_routes.router, prefix="/api")
app.include_router(gst_routes.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Welcome to Cyfuture API"}

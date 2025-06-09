from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

router = APIRouter()

class User(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None

# Simple in-memory user storage for development
users_db = {}

@router.post("/users/")
async def create_user(user: User):
    if user.username in users_db:
        raise HTTPException(status_code=400, detail="Username already registered")
    users_db[user.username] = user
    return {"message": "User created successfully", "user": user}

@router.get("/users/{username}")
async def get_user(username: str):
    if username not in users_db:
        raise HTTPException(status_code=404, detail="User not found")
    return users_db[username]

@router.get("/users/")
async def list_users():
    return list(users_db.values()) 
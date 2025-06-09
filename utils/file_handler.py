import os
from uuid import uuid4
from fastapi import UploadFile
from pathlib import Path

# Define the folder where uploaded invoices will be saved
UPLOAD_DIR = Path("uploaded_invoices")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

async def save_uploaded_file(file: UploadFile) -> str:
    """
    Save the uploaded file to a local directory with a unique filename.
    Returns the path to the saved file.
    """
    # Create a unique filename using UUID
    file_extension = Path(file.filename).suffix
    unique_filename = f"{uuid4().hex}{file_extension}"
    destination = UPLOAD_DIR / unique_filename

    # Save file to disk
    with open(destination, "wb") as buffer:
        content = await file.read()
        buffer.write(content)

    return str(destination)

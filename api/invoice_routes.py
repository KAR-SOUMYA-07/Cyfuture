from fastapi import APIRouter, File, UploadFile, HTTPException
from services.ocr_processor import extract_invoice_data
from utils.file_handler import save_uploaded_file
from models.invoice import InvoiceUploadResponse, InvoiceBase

router = APIRouter()

@router.post("/upload-invoice", response_model=InvoiceUploadResponse)
async def upload_invoice(file: UploadFile = File(...)):
    try:
    # Save uploaded invoice file locally
        saved_path = await save_uploaded_file(file)
        extracted_data = extract_invoice_data(saved_path)

    # Return structured invoice response
        return InvoiceUploadResponse(
            message="Invoice processed successfully",
            extracted_data=InvoiceBase(**extracted_data)
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process invoice: {str(e)}")
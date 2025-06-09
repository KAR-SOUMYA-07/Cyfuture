from fastapi import APIRouter, UploadFile, File, HTTPException
from services.gst_reconciliation import reconcile_gst
from utils.file_handler import save_uploaded_file
from models.gst import GSTReconciliationResponse

router = APIRouter()

@router.post("/upload-gst-invoices", response_model=GSTReconciliationResponse)
async def upload_gst_invoices(file: UploadFile = File(...)):
    try:
        # Save the uploaded GST invoice file locally
        saved_path = await save_uploaded_file(file)

        # Perform GST reconciliation logic
        reconciliation_result = reconcile_gst(saved_path)

        # Return structured response
        return GSTReconciliationResponse(
            message="GST reconciliation completed successfully.",
            match_summary=reconciliation_result
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"GST reconciliation failed: {str(e)}")

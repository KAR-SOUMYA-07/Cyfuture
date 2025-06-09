from pydantic import BaseModel
from typing import Optional
from datetime import date

class InvoiceBase(BaseModel):
    vendor_name: str
    invoice_number: str
    invoice_date: date
    total_amount: float
    gst_number: Optional[str]

class InvoiceUploadResponse(BaseModel):
    message: str
    extracted_data: InvoiceBase
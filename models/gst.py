from pydantic import BaseModel

class GSTReconciliationResult(BaseModel):
    total_invoices: int
    matched_invoices: int
    mismatched_invoices: int
    unmatched_invoices: int

class GSTReconciliationResponse(BaseModel):
    message: str
    summary: GSTReconciliationResult

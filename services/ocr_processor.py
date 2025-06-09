import pytesseract
from PIL import Image
import re
from datetime import datetime

def extract_invoice_data(image_path: str) -> dict:
    img = Image.open(image_path)
    text = pytesseract.image_to_string(img)
    # Basic parsing - you can train with specific vendor templates
    vendor = re.search(r'(?i)vendor[:\s]+(.+)', text)
    invoice_number = re.search(r'(?i)invoice\s+no[:\s]+([\w\d-]+)', text)
    invoice_date = re.search(r'(?i)date[:\s]+(\d{2}/\d{2}/\d{4})', text)
    total = re.search(r'(?i)total[:\s₹]*([\d,]+\.\d{2})', text)
    gst = re.search(r'(?i)gstin[:\s]+([0-9A-Z]{15})', text)

    return {
    "vendor_name": vendor.group(1).strip() if vendor else "Unknown",
    "invoice_number": invoice_number.group(1) if invoice_number else "N/A",
    "invoice_date": datetime.strptime(invoice_date.group(1), "%d/%m/%Y").date() if invoice_date else datetime.today().date(),
    "total_amount": float(total.group(1).replace(",", "")) if total else 0.0,
    "gst_number": gst.group(1) if gst else None
    }
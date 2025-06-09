import pandas as pd
from typing import Dict

def reconcile_gst(file_path: str) -> Dict[str, int]:
    """
    Simulate GST reconciliation by comparing claimed vs. matched entries.

    Args:
        file_path (str): Path to the uploaded GST invoice CSV/Excel file.

    Returns:
        Dict[str, int]: Summary of matched, mismatched, and unmatched entries.
    """

    # Load the file (supporting CSV and Excel)
    if file_path.endswith(".csv"):
        df = pd.read_csv(file_path)
    elif file_path.endswith((".xls", ".xlsx")):
        df = pd.read_excel(file_path)
    else:
        raise ValueError("Unsupported file type for GST reconciliation")

    # Simulated logic for reconciliation
    if "Invoice Number" not in df.columns or "GST Amount" not in df.columns or "Matched" not in df.columns:
        raise ValueError("Missing required columns: 'Invoice Number', 'GST Amount', 'Matched'")

    matched = df[df["Matched"] == True].shape[0]
    mismatched = df[df["Matched"] == False].shape[0]
    total = df.shape[0]
    unmatched = total - matched - mismatched

    return {
        "total_invoices": total,
        "matched_invoices": matched,
        "mismatched_invoices": mismatched,
        "unmatched_invoices": unmatched
    }

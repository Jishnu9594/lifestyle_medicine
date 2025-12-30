from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import LeadCreate, LeadResponse
from app.crud import create_lead, get_leads, get_lead

router = APIRouter(prefix="/leads", tags=["leads"])


@router.post("", response_model=LeadResponse)
def submit_lead(lead: LeadCreate, db: Session = Depends(get_db)):
    """Submit a new lead"""
    return create_lead(db, lead)


@router.get("", response_model=list[LeadResponse])
def list_leads(skip: int = 0, limit: int = 50, db: Session = Depends(get_db)):
    """List all leads (protected endpoint in production)"""
    leads = get_leads(db, skip=skip, limit=limit)
    return leads


@router.get("/{lead_id}", response_model=LeadResponse)
def get_lead_detail(lead_id: int, db: Session = Depends(get_db)):
    """Get a specific lead"""
    lead = get_lead(db, lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    return lead

from sqlalchemy.orm import Session
from app.models import Blog, Lead
from app.schemas import BlogCreate, BlogUpdate, LeadCreate


# Blog CRUD
def get_blog(db: Session, blog_id: int):
    return db.query(Blog).filter(Blog.id == blog_id).first()


def get_blog_by_slug(db: Session, slug: str):
    return db.query(Blog).filter(Blog.slug == slug, Blog.published == True).first()


def get_all_blogs(db: Session, skip: int = 0, limit: int = 10):
    return db.query(Blog).filter(Blog.published == True).offset(skip).limit(limit).all()


def create_blog(db: Session, blog: BlogCreate):
    db_blog = Blog(**blog.model_dump())
    db.add(db_blog)
    db.commit()
    db.refresh(db_blog)
    return db_blog


def update_blog(db: Session, blog_id: int, blog: BlogUpdate):
    db_blog = db.query(Blog).filter(Blog.id == blog_id).first()
    if db_blog:
        update_data = blog.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(db_blog, field, value)
        db.add(db_blog)
        db.commit()
        db.refresh(db_blog)
    return db_blog


def delete_blog(db: Session, blog_id: int):
    db_blog = db.query(Blog).filter(Blog.id == blog_id).first()
    if db_blog:
        db.delete(db_blog)
        db.commit()
    return db_blog


# Lead CRUD
def create_lead(db: Session, lead: LeadCreate):
    db_lead = Lead(**lead.model_dump())
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead


def get_leads(db: Session, skip: int = 0, limit: int = 50):
    return db.query(Lead).offset(skip).limit(limit).all()


def get_lead(db: Session, lead_id: int):
    return db.query(Lead).filter(Lead.id == lead_id).first()

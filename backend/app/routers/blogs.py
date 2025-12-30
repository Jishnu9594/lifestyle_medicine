from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import BlogCreate, BlogResponse, BlogUpdate
from app.crud import (
    get_blog,
    get_blog_by_slug,
    get_all_blogs,
    create_blog,
    update_blog,
    delete_blog,
)

router = APIRouter(prefix="/blogs", tags=["blogs"])


@router.get("", response_model=list[BlogResponse])
def list_blogs(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    """List all published blogs"""
    blogs = get_all_blogs(db, skip=skip, limit=limit)
    return blogs


@router.get("/{slug}", response_model=BlogResponse)
def get_blog_detail(slug: str, db: Session = Depends(get_db)):
    """Get a blog by slug"""
    blog = get_blog_by_slug(db, slug)
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    return blog


@router.post("", response_model=BlogResponse)
def create_new_blog(blog: BlogCreate, db: Session = Depends(get_db)):
    """Create a new blog post (publish directly)"""
    # Check if slug already exists
    existing = db.query(get_blog(db, blog.id)).filter_by(slug=blog.slug).first()
    if existing:
        raise HTTPException(status_code=400, detail="Slug already exists")
    
    return create_blog(db, blog)


@router.put("/{blog_id}", response_model=BlogResponse)
def update_blog_post(blog_id: int, blog: BlogUpdate, db: Session = Depends(get_db)):
    """Update a blog post"""
    existing_blog = get_blog(db, blog_id)
    if not existing_blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    return update_blog(db, blog_id, blog)


@router.delete("/{blog_id}")
def delete_blog_post(blog_id: int, db: Session = Depends(get_db)):
    """Delete a blog post"""
    existing_blog = get_blog(db, blog_id)
    if not existing_blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    delete_blog(db, blog_id)
    return {"message": "Blog deleted successfully"}

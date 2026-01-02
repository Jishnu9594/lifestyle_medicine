from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional


class BlogBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=255)
    slug: str = Field(..., min_length=1, max_length=255)
    excerpt: str = Field(..., min_length=10, max_length=500)
    content: str = Field(..., min_length=50)
    image_url: Optional[str] = Field(None, max_length=500)
    author: Optional[str] = Field(None, max_length=255)
    category: Optional[str] = Field(None, max_length=100)
    published: bool = False


class BlogCreate(BlogBase):
    pass


class BlogUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=255)
    excerpt: Optional[str] = Field(None, min_length=10, max_length=500)
    content: Optional[str] = Field(None, min_length=50)
    image_url: Optional[str] = Field(None, max_length=500)
    author: Optional[str] = Field(None, max_length=255)
    category: Optional[str] = Field(None, max_length=100)
    published: Optional[bool] = None


class BlogResponse(BlogBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class LeadBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)
    message: Optional[str] = Field(None, max_length=5000)
    source: str = Field(..., min_length=1, max_length=50)


class LeadCreate(LeadBase):
    pass


class LeadResponse(LeadBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

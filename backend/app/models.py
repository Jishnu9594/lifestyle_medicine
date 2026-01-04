from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from datetime import datetime
from app.database import Base


from passlib.hash import bcrypt


class AdminUser(Base):
    __tablename__ = "admin_users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)

    def verify_password(self, password: str) -> bool:
        return bcrypt.verify(password, self.hashed_password)

class Blog(Base):
    __tablename__ = "blogs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), index=True)
    slug = Column(String(255), unique=True, index=True)
    excerpt = Column(String(500))
    content = Column(Text)
    image_url = Column(String(500), nullable=True)
    author = Column(String(255), nullable=True)
    category = Column(String(100), nullable=True)
    published = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), index=True)
    email = Column(String(255), index=True)
    phone = Column(String(20), nullable=True)
    message = Column(Text, nullable=True)
    source = Column(String(50))  # hero, newsletter, contact, blog
    created_at = Column(DateTime, default=datetime.utcnow)

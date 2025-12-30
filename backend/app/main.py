from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.routers import blogs, leads

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Lifestyle Medicine API",
    description="Backend API for Lifestyle Medicine Website",
    version="0.1.0",
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:8000",
        "https://lifestylemedicine.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(blogs.router)
app.include_router(leads.router)


@app.get("/")
def read_root():
    return {
        "message": "Welcome to Lifestyle Medicine API",
        "docs": "/docs",
        "version": "0.1.0",
    }


@app.get("/health")
def health_check():
    return {"status": "healthy"}

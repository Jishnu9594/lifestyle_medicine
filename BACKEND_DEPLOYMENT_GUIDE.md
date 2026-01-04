# Backend Deployment Guide

## Recommended Hosting Platforms

### 1. **Render** (Recommended - Free Tier Available)

- **URL**: https://render.com
- **Pros**:
  - Free tier with auto-deploy from GitHub
  - Automatic HTTPS
  - PostgreSQL database included
  - Easy to set up
- **Steps**:
  1. Sign up at render.com with GitHub account
  2. Create new "Web Service"
  3. Connect your GitHub repo (lifestyle_medicine)
  4. Set build command: `pip install -r backend/requirements.txt`
  5. Set start command: `cd backend && uvicorn app.main:app --host 0.0.0.0 --port 8000`
  6. Deploy!

### 2. **Railway** (Free Tier Available)

- **URL**: https://railway.app
- **Pros**:
  - Simple interface
  - Free tier available
  - PostgreSQL support
  - GitHub integration
- **Steps**:
  1. Sign up at railway.app
  2. Create new project
  3. Deploy from GitHub
  4. Select Python environment
  5. Set environment variables
  6. Deploy!

### 3. **Heroku** (Paid, was free but now requires credit card)

- **URL**: https://heroku.com
- **Pros**:
  - Industry standard
  - Add-ons for databases
  - Easy scaling
- **Steps**:
  1. Sign up and create app
  2. Deploy via Git or GitHub
  3. Set buildpack to Python
  4. Deploy!

### 4. **PythonAnywhere** (Paid, Python-Specific)

- **URL**: https://pythonanywhere.com
- **Pros**:
  - Python-specific hosting
  - Good for beginners
  - Web-based console

### 5. **DigitalOcean App Platform** (Paid, $12/month starting)

- **URL**: https://www.digitalocean.com/products/app-platform/
- **Pros**:
  - Affordable
  - Scalable
  - GitHub integration
  - Free PostgreSQL database

## Step-by-Step Guide for Render (Easiest)

### 1. Prepare Your Repository

```bash
# Make sure all code is committed
git add .
git commit -m "Prepare backend for deployment"
git push origin main
```

### 2. Create Render Account

- Go to https://render.com
- Sign up with GitHub
- Connect your GitHub account

### 3. Create Web Service

- Click "New +"
- Select "Web Service"
- Connect your lifestyle_medicine repository
- Select the main branch

### 4. Configure Service

- **Name**: lifestyle-medicine-api
- **Runtime**: Python
- **Build Command**: `pip install -r backend/requirements.txt`
- **Start Command**: `cd backend && uvicorn app.main:app --host 0.0.0.0 --port 8000`
- **Environment**: Select from dropdown
- **Free tier** or **Paid** (your choice)

### 5. Add Environment Variables (Optional)

- DATABASE_URL (if using PostgreSQL)
- Any other environment-specific variables

### 6. Deploy

- Click "Create Web Service"
- Wait for deployment (2-3 minutes)
- You'll get a URL like: `https://lifestyle-medicine-api.onrender.com`

### 7. Update Frontend

In `frontend/next.config.js`:

```javascript
env: {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://lifestyle-medicine-api.onrender.com",
}
```

## Database Migration (Important)

### For Local Development (SQLite - Current)

- Keep using SQLite in `backend/app/database.py`
- File: `app.db` (already created)

### For Production (PostgreSQL - Recommended)

You may want to switch to PostgreSQL for production:

1. Install PostgreSQL driver:

   ```bash
   pip install psycopg2-binary
   ```

2. Update `backend/app/database.py`:

   ```python
   import os
   from sqlalchemy import create_engine

   DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./app.db")

   engine = create_engine(
       DATABASE_URL,
       connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {}
   )
   ```

3. Add to `requirements.txt`:
   ```
   psycopg2-binary==2.9.9
   ```

## CORS Configuration Update

After getting your backend URL, update `backend/app/main.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:8000",
        "https://yourdomain.com",  # Your frontend domain
        "https://lifestyle-medicine-api.onrender.com",  # Your backend domain
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Testing After Deployment

### 1. Test Backend Health

```bash
curl https://your-backend-url/health
# Should return: {"status": "healthy"}
```

### 2. Test Blog Endpoint

```bash
curl https://your-backend-url/blogs
# Should return list of blogs
```

### 3. Test Frontend Connection

- Update API URL in frontend
- Run: `npm run dev`
- Check if blogs load from backend

## Troubleshooting

### 502 Bad Gateway

- Check deployment logs
- Ensure start command is correct
- Verify Python version compatibility

### CORS Errors

- Add your frontend domain to allowed_origins
- Redeploy backend

### Database Errors

- Check DATABASE_URL environment variable
- Ensure database migrations ran
- Check logs for SQL errors

## Recommendation

**I recommend Render because:**

1. ✅ Free tier with good limits
2. ✅ Auto-deploy from GitHub
3. ✅ Custom domain support
4. ✅ Easy to upgrade later
5. ✅ Built-in PostgreSQL option
6. ✅ Great documentation

---

Ready to deploy? Choose Render and follow the steps above!

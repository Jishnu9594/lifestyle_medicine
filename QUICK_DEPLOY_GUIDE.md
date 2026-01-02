# Quick Start: Deploy Your Backend

## ⚡ Super Quick (5 minutes)

### Step 1: Go to Render

1. Visit https://render.com
2. Sign up with GitHub

### Step 2: Create Web Service

1. Click "New +" → "Web Service"
2. Select your `lifestyle_medicine` repository
3. Configure:
   - **Name**: lifestyle-medicine-api
   - **Build Command**: `pip install -r backend/requirements.txt`
   - **Start Command**: `cd backend && uvicorn app.main:app --host 0.0.0.0 --port 8000`

### Step 3: Deploy

- Click "Create Web Service"
- Wait 2-3 minutes
- Get your URL: `https://lifestyle-medicine-api.onrender.com`

### Step 4: Update Frontend

Update `frontend/.env.local`:

```
NEXT_PUBLIC_API_URL=https://lifestyle-medicine-api.onrender.com
```

### Step 5: Test

```bash
curl https://lifestyle-medicine-api.onrender.com/health
# Should return: {"status":"healthy"}
```

---

## 📚 Full Details

See `BACKEND_DEPLOYMENT_GUIDE.md` for complete information on:

- All hosting options (Render, Railway, Heroku, DigitalOcean, etc.)
- Step-by-step deployment instructions
- Database setup
- CORS configuration
- Troubleshooting

---

## 🔗 Current Status

- ✅ Backend running locally on http://localhost:8000
- ✅ Blog API working (tested with curl)
- ✅ Database ready (SQLite local, PostgreSQL for production)
- ⏳ Ready to deploy (just need to choose platform and deploy)
- ⏳ Frontend integration ready (just need backend URL)

---

## 💡 Recommended Platform: **Render**

Why Render?

- ✅ Free tier available
- ✅ Auto-deploy from GitHub
- ✅ Custom domain support
- ✅ PostgreSQL available
- ✅ Easy to use
- ✅ Scale whenever needed

---

## 🚀 Next Steps

1. **Deploy Backend** (choose your platform from guide)
2. **Get Backend URL** (e.g., https://your-api.onrender.com)
3. **Update Frontend** with new API URL
4. **Test Integration** (blogs should load from backend)
5. **Deploy Frontend** to Vercel

---

Questions? Check `BACKEND_DEPLOYMENT_GUIDE.md`

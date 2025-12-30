# Setup Instructions for Lifestyle Medicine Website

## Quick Start Guide

### Phase 1: Environment Setup (15 mins)

#### Frontend

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
# Visit http://localhost:3000
```

#### Backend

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start server
uvicorn app.main:app --reload
# API docs available at http://localhost:8000/docs
```

### Phase 2: Testing API Connection (5 mins)

1. **Health Check**

   ```bash
   curl http://localhost:8000/health
   ```

2. **Test Blog Creation**

   - Visit http://localhost:8000/docs
   - Try POST /blogs with sample data
   - Verify response

3. **Test Lead Submission**
   - Visit http://localhost:3000/contact
   - Fill form and submit
   - Check http://localhost:8000/docs GET /leads

### Phase 3: Customization

#### Update Content

1. **Homepage**: Edit `/frontend/app/page.tsx`
2. **About**: Edit `/frontend/app/about/page.tsx`
3. **Navigation**: Edit `/frontend/components/Navigation.tsx`
4. **Footer**: Edit `/frontend/components/Footer.tsx`

#### Add Blog Posts

```bash
# Use Swagger UI at http://localhost:8000/docs
# Or use curl:
curl -X POST http://localhost:8000/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Your Article Title",
    "slug": "your-article-slug",
    "excerpt": "Brief description",
    "content": "Full article content here...",
    "published": true
  }'
```

#### Customize Theme

1. Edit `frontend/tailwind.config.ts` for colors
2. Modify `frontend/styles/globals.css` for fonts
3. Update component variants as needed

## Build & Deploy

### Build Frontend

```bash
cd frontend
npm run build
```

### Build Backend

```bash
# Backend is ready to deploy as-is
# For production, set ENVIRONMENT=production
```

### Deploy to Vercel (Frontend)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Railway (Backend)

1. Push code to GitHub
2. Connect Railway project
3. Set Python version: 3.10
4. Add environment variables
5. Deploy

## Key Files to Know

**Frontend**

- `app/page.tsx` - Homepage
- `components/Navigation.tsx` - Top navigation
- `components/Footer.tsx` - Footer with newsletter
- `lib/api.ts` - API client
- `lib/validation.ts` - Form validation schemas

**Backend**

- `app/main.py` - FastAPI app
- `app/models.py` - Database models
- `app/schemas.py` - Validation schemas
- `app/routers/blogs.py` - Blog endpoints
- `app/routers/leads.py` - Lead endpoints

## Common Issues & Solutions

### Issue: Cannot connect frontend to backend

**Solution**:

- Check backend is running on port 8000
- Verify `NEXT_PUBLIC_API_URL` in frontend `.env.local`
- Restart frontend dev server

### Issue: Database locked

**Solution**:

- Delete `backend/app.db`
- Restart backend server to recreate

### Issue: Port already in use

**Solution**:

```bash
# Find and kill process
lsof -i :3000  # frontend
lsof -i :8000  # backend
kill -9 <PID>
```

## Next Steps

1. ✅ Verify both servers running
2. ✅ Test API endpoints
3. ✅ Customize content
4. ✅ Add your blog posts
5. ✅ Test forms locally
6. ✅ Build for production
7. ✅ Deploy to hosting

## Support Resources

- **Next.js**: https://nextjs.org/docs
- **FastAPI**: https://fastapi.tiangolo.com/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Deployment**: https://vercel.com/docs
- **Railway Deployment**: https://railway.app/

---

**Total Setup Time**: ~30 minutes (including installations)

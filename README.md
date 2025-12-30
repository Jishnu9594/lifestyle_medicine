# Lifestyle Medicine Website

A professional healthcare website built with Next.js 14, FastAPI, and TypeScript. Features blog publishing, lead capture, and SEO optimization.

## Project Structure

```
life_style_medicine/
├── frontend/                 # Next.js 14 application
│   ├── app/                 # App Router pages
│   │   ├── page.tsx         # Homepage
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog listing & details
│   │   ├── contact/         # Contact form
│   │   ├── privacy/         # Privacy policy
│   │   └── terms/           # Terms & conditions
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utilities & API client
│   ├── styles/              # Global styles
│   ├── public/              # Static assets
│   └── package.json
│
└── backend/                 # FastAPI application
    ├── app/
    │   ├── main.py         # FastAPI app entry
    │   ├── database.py     # Database configuration
    │   ├── models.py       # SQLAlchemy models
    │   ├── schemas.py      # Pydantic schemas
    │   ├── crud.py         # CRUD operations
    │   └── routers/        # API endpoints
    │       ├── blogs.py    # Blog routes
    │       └── leads.py    # Lead routes
    ├── app.db             # SQLite database
    └── requirements.txt
```

## Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **HTTP Client**: Axios

### Backend

- **Framework**: FastAPI
- **ORM**: SQLAlchemy
- **Database**: SQLite
- **Validation**: Pydantic
- **Server**: Uvicorn

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.10+ (for backend)

### Frontend Setup

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # .env.local
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

### Backend Setup

1. **Navigate to backend directory**

   ```bash
   cd backend
   ```

2. **Create virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run server**
   ```bash
   uvicorn app.main:app --reload
   ```
   API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

## API Endpoints

### Blog Endpoints

- `GET /blogs` - Get all published blogs
- `GET /blogs/{slug}` - Get a specific blog post
- `POST /blogs` - Create a new blog post
- `PUT /blogs/{id}` - Update a blog post
- `DELETE /blogs/{id}` - Delete a blog post

### Lead Endpoints

- `POST /leads` - Submit a new lead
- `GET /leads` - Get all leads
- `GET /leads/{id}` - Get a specific lead

### Health Check

- `GET /health` - Server health status
- `GET /` - API welcome message

## Features

### Core Features

✅ Responsive design (mobile, tablet, desktop)
✅ Server-side rendering & SEO optimization
✅ Blog system with slug-based URLs
✅ Lead capture forms (contact, newsletter, CTAs)
✅ Medical-grade clean UI with Tailwind CSS
✅ Form validation with Zod
✅ API integration with Axios
✅ CORS enabled for cross-origin requests
✅ SQLite database with SQLAlchemy ORM

### Pages

- **Home** - Hero, specialty pillars, persona cards, blog highlights, CTA
- **About** - Organization story & values
- **Blog List** - All published articles with metadata
- **Blog Detail** - Individual article with CTA
- **Contact** - Lead capture form
- **Privacy Policy** - Compliance page
- **Terms & Conditions** - Legal terms

### Components

- `Button` - Variant support (primary, secondary, ghost)
- `Card` - Reusable card with hover effects
- `Container` - Responsive width container
- `Section` - Spacing wrapper
- `Input` - Form input with validation
- `TextArea` - Multi-line text input
- `Form` - Form wrapper with validation
- `FadeIn` - Scroll animation component
- `Navigation` - Sticky navbar with mobile menu
- `Footer` - Newsletter signup & links

## Styling System

### Color Palette

- **Primary Green**: #1E7F4F
- **Background**: #FFFFFF
- **Text**: #111111
- **Muted**: #6B7280
- **Light Accent**: #E8F5EF

### Utilities

Tailwind CSS custom classes:

- `.heading-1` to `.heading-3` - Typography
- `.text-body` - Body text styling
- `.button-primary` / `.button-secondary` - Button styles
- `.container-max` - Max-width container
- `.section-spacing` - Section vertical padding

## Database Schema

### Blogs Table

```sql
CREATE TABLE blogs (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    slug VARCHAR(255) UNIQUE,
    excerpt VARCHAR(500),
    content TEXT,
    published BOOLEAN DEFAULT FALSE,
    created_at DATETIME,
    updated_at DATETIME
)
```

### Leads Table

```sql
CREATE TABLE leads (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    message TEXT,
    source VARCHAR(50),  -- 'hero', 'newsletter', 'contact', 'blog'
    created_at DATETIME
)
```

## Deployment

### Frontend (Vercel)

1. Push to GitHub
2. Connect Vercel project
3. Set `NEXT_PUBLIC_API_URL` environment variable
4. Deploy automatically on push

### Backend (Railway/Render)

1. Create account on Railway or Render
2. Connect GitHub repository
3. Set Python version to 3.10+
4. Add `DATABASE_URL` environment variable for PostgreSQL (optional migration)
5. Deploy

## Performance Optimization

- ✅ Lazy loading images
- ✅ Code splitting with Next.js
- ✅ Server-side rendering for SEO
- ✅ Optimized API responses
- ✅ Framer Motion for smooth animations
- ✅ CSS optimization with Tailwind

## SEO Features

- ✅ Meta tags per page
- ✅ OpenGraph tags for social sharing
- ✅ Structured data ready
- ✅ Sitemap support (ready for integration)
- ✅ Clean URL structure
- ✅ Server-side rendering

## Accessibility (WCAG 2.1 AA)

- ✅ Proper heading hierarchy
- ✅ ARIA labels on form inputs
- ✅ Keyboard navigation support
- ✅ Color contrast compliance
- ✅ Screen reader friendly

## Security

- ✅ Input validation (Zod + Pydantic)
- ✅ CORS configuration
- ✅ HTTPS ready
- ✅ SQL injection protection (SQLAlchemy)
- ✅ Environment variables for sensitive data
- ✅ Rate limiting ready (add with middleware)

## Environment Variables

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (.env - optional)

```
DATABASE_URL=sqlite:///./app.db
ENVIRONMENT=development
```

## Development Workflow

1. **Make changes** to frontend or backend code
2. **Test locally** with `npm run dev` (frontend) and `uvicorn` (backend)
3. **Validate API** at http://localhost:8000/docs
4. **Check TypeScript** with `npm run type-check`
5. **Commit** changes to git

## Common Tasks

### Create a Blog Post

```bash
curl -X POST http://localhost:8000/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Article Title",
    "slug": "article-title",
    "excerpt": "Brief description",
    "content": "Full article content...",
    "published": true
  }'
```

### Submit a Lead

```bash
curl -X POST http://localhost:8000/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "message": "I want to transform my health",
    "source": "contact"
  }'
```

## Future Enhancements

- [ ] Admin dashboard for blog management
- [ ] User authentication & membership
- [ ] Email newsletter automation
- [ ] CMS editor integration
- [ ] Analytics dashboard
- [ ] Payment processing
- [ ] User comments on blogs
- [ ] Search functionality
- [ ] Testimonials system
- [ ] Video content support

## Troubleshooting

### Port Already in Use

```bash
# Frontend (port 3000)
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Backend (port 8000)
lsof -i :8000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### CORS Errors

- Check `NEXT_PUBLIC_API_URL` matches backend URL
- Verify CORS origins in `app/main.py`

### Database Issues

- Delete `app.db` to reset database
- Rerun backend to recreate tables

## License

Private project - All rights reserved

## Support

For issues or questions, contact the development team.

---

**Last Updated**: December 2024
**Status**: MVP Development

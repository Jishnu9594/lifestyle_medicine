# Leads Workflow - Complete Guide

## Overview

The leads system captures user information when they fill out the contact form on your website. These leads are stored in the backend database and can be used for follow-up communications, marketing, and sales.

## How Leads Work - Complete Flow

### 1. **User Fills Contact Form** (Frontend)

User visits `/contact` page and fills in the form:

```
Name:     John Doe
Email:    john@example.com
Phone:    +1-555-0123
Message:  I'm interested in your courses
Course:   (optional - "Nutrition Mastery" if coming from course page)
```

**File**: `frontend/app/contact/ContactForm.tsx`

### 2. **Form Submission** (Frontend → Backend)

The contact form:
- Validates input using Zod schema (`frontend/lib/validation.ts`)
- Calls `leadAPI.submit(data)` which sends POST request to backend
- If course enrollment, prepends course name to message

```typescript
const submitData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1-555-0123",
  message: "I'm interested in your courses",
  source: "contact"
};

// This calls: POST https://lifestyle-medicine.onrender.com/leads
await leadAPI.submit(submitData);
```

**File**: `frontend/lib/api.ts`

```typescript
export const leadAPI = {
  submit: (data: any) => apiClient.post("/leads", data),
};
```

### 3. **Backend Receives Lead** (Backend API)

The backend POST endpoint processes the lead:

**File**: `backend/app/routers/leads.py`

```python
@router.post("", response_model=LeadResponse)
def submit_lead(lead: LeadCreate, db: Session = Depends(get_db)):
    """Submit a new lead"""
    return create_lead(db, lead)
```

### 4. **Database Storage** (SQLite/PostgreSQL)

The lead is validated using Pydantic schema and saved to database:

**File**: `backend/app/schemas.py`

```python
class LeadCreate(LeadBase):
    pass

class LeadBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    email: EmailStr  # Valid email required
    phone: Optional[str] = Field(None, max_length=20)
    message: Optional[str] = Field(None, max_length=5000)
    source: str = Field(..., min_length=1, max_length=50)
```

**File**: `backend/app/models.py`

```python
class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), index=True)
    email = Column(String(255), index=True)
    phone = Column(String(20), nullable=True)
    message = Column(Text, nullable=True)
    source = Column(String(50))  # "hero", "newsletter", "contact", "blog"
    created_at = Column(DateTime, default=datetime.utcnow)
```

### 5. **Success Response** (Backend → Frontend)

Backend returns the created lead with ID and timestamp:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-0123",
  "message": "I'm interested in your courses",
  "source": "contact",
  "created_at": "2026-01-04T06:47:08.181774"
}
```

### 6. **User Feedback** (Frontend)

User sees success message:

```
✅ "Thank you! We will get back to you soon."
```

The message auto-disappears after 5 seconds and form resets.

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                       FRONTEND (Next.js)                         │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Contact Page (/contact)                                  │   │
│  │  - User fills form with name, email, message              │   │
│  │  - If enrolling in course, adds course name to message    │   │
│  └───────────────────────┬──────────────────────────────────┘   │
│                          │                                        │
│                          ▼                                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  ContactForm Component                                    │   │
│  │  - Validates form input (name, email, message)            │   │
│  │  - Uses React Hook Form + Zod validation                  │   │
│  └───────────────────────┬──────────────────────────────────┘   │
│                          │                                        │
│                          ▼                                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  API Client (lib/api.ts)                                  │   │
│  │  - Calls: leadAPI.submit(data)                            │   │
│  │  - HTTP POST to /leads endpoint                           │   │
│  └───────────────────────┬──────────────────────────────────┘   │
└────────────────────────┼─────────────────────────────────────────┘
                         │ HTTP POST
                         │ https://lifestyle-medicine.onrender.com/leads
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                      BACKEND (FastAPI)                           │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  POST /leads Endpoint (routers/leads.py)                 │   │
│  │  - Receives JSON: {name, email, phone, message, source}  │   │
│  │  - Validates data structure                              │   │
│  └───────────────────────┬──────────────────────────────────┘   │
│                          │                                        │
│                          ▼                                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Pydantic Validation (schemas.py)                         │   │
│  │  - Checks: name (2-255 chars)                             │   │
│  │  - Validates: email (valid email format)                  │   │
│  │  - Optional: phone, message                               │   │
│  │  - Required: source                                       │   │
│  └───────────────────────┬──────────────────────────────────┘   │
│                          │                                        │
│                          ▼                                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  CRUD Operation (crud.py)                                 │   │
│  │  - Creates Lead object                                    │   │
│  │  - Assigns ID (auto-increment)                            │   │
│  │  - Sets created_at timestamp                              │   │
│  └───────────────────────┬──────────────────────────────────┘   │
│                          │                                        │
│                          ▼                                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Database (SQLite/PostgreSQL)                             │   │
│  │                                                            │   │
│  │  leads table:                                              │   │
│  │  ┌─────┬──────────┬───────────┬───────┬───────┬──────────┐│  │
│  │  │ id  │ name     │ email     │ phone │ msg   │ created  ││  │
│  │  ├─────┼──────────┼───────────┼───────┼───────┼──────────┤│  │
│  │  │ 1   │ John Doe │ john@...  │ +1... │ "I'm  │ 2026-01-││  │
│  │  │     │          │           │       │ inter │ 04 ...   ││  │
│  │  └─────┴──────────┴───────────┴───────┴───────┴──────────┘│  │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## API Endpoints for Leads

### 1. **Submit a New Lead** (Form Submission)

**Endpoint**: `POST /leads`

**Request**:
```bash
curl -X POST https://lifestyle-medicine.onrender.com/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+1-555-0456",
    "message": "Interested in nutrition course",
    "source": "contact"
  }'
```

**Response** (201 Created):
```json
{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1-555-0456",
  "message": "Interested in nutrition course",
  "source": "contact",
  "created_at": "2026-01-04T10:30:00.000000"
}
```

### 2. **Get All Leads** (Admin/Dashboard)

**Endpoint**: `GET /leads`

**Request**:
```bash
curl https://lifestyle-medicine.onrender.com/leads
```

**Response**:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1-555-0123",
    "message": "I'm interested in your courses",
    "source": "contact",
    "created_at": "2026-01-04T06:47:08.181774"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+1-555-0456",
    "message": "Interested in nutrition course",
    "source": "contact",
    "created_at": "2026-01-04T10:30:00.000000"
  }
]
```

**Query Parameters**:
- `skip`: Number of records to skip (default: 0)
- `limit`: Number of records to return (default: 50)

**Example**: Get leads 10-20:
```bash
curl "https://lifestyle-medicine.onrender.com/leads?skip=10&limit=10"
```

### 3. **Get Specific Lead** (Detail View)

**Endpoint**: `GET /leads/{lead_id}`

**Request**:
```bash
curl https://lifestyle-medicine.onrender.com/leads/1
```

**Response**:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-0123",
  "message": "I'm interested in your courses",
  "source": "contact",
  "created_at": "2026-01-04T06:47:08.181774"
}
```

---

## Lead Sources

The `source` field tracks where the lead came from:

| Source | Description | Example |
|--------|-------------|---------|
| `contact` | Contact form on /contact page | User fills contact form |
| `hero` | Hero section CTA button | "Get Started" button click |
| `newsletter` | Newsletter signup | Email subscription |
| `blog` | Blog post engagement | Reader interested in topic |
| `course` | Course enrollment | Enrolling in specific course |

**Setting Source** (Currently defaults to "contact"):
```typescript
const submitData = {
  ...data,
  source: "contact"  // or "hero", "newsletter", "blog", "course"
};
```

---

## Form Validation Rules

The contact form validates data before sending to backend:

| Field | Type | Rules | Example |
|-------|------|-------|---------|
| `name` | String | 2-255 characters, required | "John Doe" |
| `email` | Email | Valid email format, required | "john@example.com" |
| `phone` | String | Optional, max 20 chars | "+1-555-0123" |
| `message` | String | Optional, max 5000 chars | "I'm interested..." |
| `source` | String | 1-50 chars, required | "contact" |

**File**: `frontend/lib/validation.ts`

```typescript
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(255),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
  source: z.string().default("contact"),
});
```

---

## Database Schema

### Leads Table

```sql
CREATE TABLE leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  source VARCHAR(50) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for fast queries
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_name ON leads(name);
CREATE INDEX idx_leads_created_at ON leads(created_at);
```

---

## Testing the Leads System

### 1. **Test via Frontend** (Browser)

1. Go to `http://localhost:3000/contact`
2. Fill out the contact form
3. Click "Send Message"
4. See success message: "Thank you! We will get back to you soon."
5. Form resets automatically

### 2. **Test via API** (Command Line)

**Create a lead**:
```bash
curl -X POST https://lifestyle-medicine.onrender.com/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "555-1234",
    "message": "Testing the leads system",
    "source": "contact"
  }'
```

**Verify it was saved**:
```bash
curl https://lifestyle-medicine.onrender.com/leads | jq '.[] | {id, name, email, created_at}'
```

### 3. **Monitor in Real-time**

Check the logs on Render dashboard:
1. Go to https://dashboard.render.com
2. Click on "lifestyle-medicine-api" service
3. Go to "Logs" tab
4. See POST /leads requests in real-time

---

## Next Steps - Adding More Features

### 1. **Admin Dashboard**
Create admin panel to view/manage leads:
```typescript
// frontend/app/admin/leads/page.tsx
const response = await leadAPI.getAll();
```

### 2. **Email Notifications**
Send email when new lead is submitted:
```python
# backend/app/routers/leads.py
from app.email import send_lead_notification
await send_lead_notification(lead)
```

### 3. **Lead Scoring**
Add scoring based on engagement:
```python
# Score based on source, fields filled, etc.
lead.score = calculate_score(lead)
```

### 4. **Export/CRM Integration**
Export leads to external systems:
- Salesforce
- HubSpot
- Mailchimp
- Google Sheets

### 5. **SMS/Email Follow-up**
Automated follow-up sequences:
- Welcome email
- Product info email
- Course recommendation
- Special offer

---

## Troubleshooting

### Issue: Form submission fails with "Invalid email"

**Solution**: Check email format - must be valid email
```
❌ "john@"
❌ "john.example.com"
✅ "john@example.com"
```

### Issue: Lead not appearing in database

**Solution**: Check:
1. Backend is running: `curl https://lifestyle-medicine.onrender.com/leads`
2. Email validation passes
3. No CORS errors in browser console

### Issue: CORS error when submitting form

**Solution**: Backend CORS is already configured for:
- `http://localhost:3000` (local dev)
- `http://localhost:3001` (local dev)
- Frontend production domain (once deployed)

Update `backend/app/main.py` if needed.

---

## Summary

**Leads workflow** captures interested users through the contact form and stores them for follow-up:

1. ✅ User fills form on `/contact`
2. ✅ Frontend validates data
3. ✅ API sends POST to `/leads`
4. ✅ Backend validates with Pydantic
5. ✅ SQLite stores lead
6. ✅ User sees success message
7. ✅ Admin can retrieve via GET `/leads`

**You can now**:
- ✅ View all leads: `curl https://lifestyle-medicine.onrender.com/leads`
- ✅ Get specific lead: `curl https://lifestyle-medicine.onrender.com/leads/1`
- ✅ Submit from frontend form
- ✅ Submit via API for testing

---

**Next**: Deploy frontend to Vercel and monitor leads in production! 🚀

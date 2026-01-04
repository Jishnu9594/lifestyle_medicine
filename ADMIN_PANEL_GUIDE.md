# Admin Panel Guide

## Overview

Your website now includes a complete admin dashboard for managing blogs and leads with email notifications.

## Admin Features

### 1. **Admin Dashboard** (`/admin`)
Main admin hub with quick access to all admin features.

**URL**: `http://localhost:3000/admin` (local) or `https://your-domain.com/admin` (production)

**Features**:
- Quick access to blog management
- Quick access to leads dashboard
- Configuration tips
- Help documentation

---

## Blog Management (`/admin/blogs`)

### Create New Blog

1. Go to `/admin/blogs`
2. Fill in the form:
   - **Title**: Blog post title (min 5 characters)
   - **Slug**: URL-friendly name (e.g., "nutrition-tips")
   - **Author**: Your name or doctor name
   - **Category**: Topic category (e.g., "Nutrition", "Fitness")
   - **Image URL**: Full URL to blog image from Unsplash or other source
   - **Excerpt**: Brief summary (10-500 characters)
   - **Content**: Full blog post (min 50 characters)
   - **Published**: Checkbox to publish or save as draft

3. Click "Create Blog"

### Edit Blog

1. Scroll down to "All Blog Posts" section
2. Find the blog you want to edit
3. Click the "Edit" button
4. Make your changes
5. Click "Update Blog"

### Delete Blog

1. Find the blog in the list
2. Click "Delete" button
3. Confirm deletion

### Blog Best Practices

✅ **Good Slug Examples**:
- `nutrition-disease-prevention`
- `sleep-foundation-health`
- `fitness-movement-life`

❌ **Bad Slug Examples**:
- `My Blog Post` (spaces, capital letters)
- `blog-1` (not descriptive)
- `fitness!!!` (special characters)

✅ **Finding Free Images**:
- https://unsplash.com (high quality, free)
- https://pexels.com (free stock photos)
- https://pixabay.com (free images)

**Example Image URL**:
```
https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80
```

---

## Leads Dashboard (`/admin/leads`)

### View Leads

1. Go to `/admin/leads`
2. See statistics at the top:
   - **Total Leads**: All leads received
   - **Today**: Leads received today
   - **Contact Form**: Direct contact form submissions
   - **Course Enrollments**: Course-related leads

### Filter Leads

Use the filter buttons to view leads by source:
- **All Leads**: Show all leads
- **Contact**: From contact form
- **Course**: From course enrollment
- **Newsletter**: From newsletter signup
- **Hero**: From hero section CTA
- **Blog**: From blog engagement

### View Lead Details

1. Click on any lead to expand it
2. See the full message
3. View contact information (name, email, phone)
4. Click "Reply via Email" to send an email
5. Click "WhatsApp" to contact via WhatsApp (if phone available)

### Export Leads

1. Click "📥 Export CSV" button
2. File downloads as `leads-YYYY-MM-DD.csv`
3. Open in Excel, Google Sheets, or any spreadsheet app

**Exported Data Includes**:
- ID
- Name
- Email
- Phone
- Source
- Message
- Date/Time

---

## Email Configuration

### What Email Does Your System Send?

1. **Admin Notification Email** (to you)
   - Sent when user submits a lead
   - Contains user's name, email, phone, message
   - Beautiful HTML formatted email
   - Allows you to respond directly

2. **Welcome Email** (to the user)
   - Sent after they submit the contact form
   - Thanks them for contacting you
   - Says you'll respond within 24 hours
   - Links to your blog

### Setting Up Email (Gmail)

#### Step 1: Enable 2-Step Verification
1. Go to: https://myaccount.google.com/security
2. Click "2-Step Verification"
3. Follow the steps to enable it

#### Step 2: Create App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select **Mail** and **Windows Computer**
3. Google generates a 16-character password
4. Copy this password (remove spaces)

#### Step 3: Update Backend .env
Create or update `.env` file in `backend/` folder:

```bash
# Email Configuration
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your-16-char-password-from-google
ADMIN_EMAIL=your-email@gmail.com
```

#### Step 4: Restart Backend
1. Stop the backend server
2. Start it again (it reads the new .env file)
3. Test by submitting a contact form

### Using Other Email Providers

#### Outlook/Hotmail
```bash
SMTP_SERVER=smtp-mail.outlook.com
SMTP_PORT=587
SENDER_EMAIL=your-email@outlook.com
SENDER_PASSWORD=your-outlook-password
```

#### Yahoo Mail
```bash
SMTP_SERVER=smtp.mail.yahoo.com
SMTP_PORT=587
SENDER_EMAIL=your-email@yahoo.com
SENDER_PASSWORD=your-yahoo-password
```

#### Custom Email Server
```bash
SMTP_SERVER=your-mail-server.com
SMTP_PORT=587  # or 465 for SSL
SENDER_EMAIL=your-email@yourdomain.com
SENDER_PASSWORD=your-password
```

### Troubleshooting Email

**Issue**: "Email configuration missing" in logs

**Solution**: Make sure .env file exists in backend/ folder with all email settings

**Issue**: "Authentication failed"

**Solution**: 
- Gmail users: Use app password, not regular password
- Check email/password are copied exactly (no extra spaces)

**Issue**: "Failed to connect to SMTP server"

**Solution**:
- Check SMTP_SERVER and SMTP_PORT are correct
- Make sure port 587 is not blocked by firewall
- Some networks block SMTP - try different email provider

---

## How It Works - Complete Flow

### Blog Creation Flow

```
1. Admin fills blog form at /admin/blogs
2. Frontend validates all fields
3. Sends POST request to backend /blogs endpoint
4. Backend validates with Pydantic
5. SQLite stores blog in database
6. Admin sees success message
7. Blog appears in list
8. Published blogs show on /blog page
```

### Lead Submission Flow

```
1. User fills contact form at /contact
2. Frontend validates email format
3. Sends POST request to backend /leads endpoint
4. Backend validates with Pydantic
5. SQLite stores lead in database
6. Email service sends ADMIN notification email
7. Email service sends WELCOME email to user
8. Admin sees "Thanks, we'll get back to you"
9. Admin can view lead at /admin/leads
```

---

## Database

### Blogs Table
```sql
CREATE TABLE blogs (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt VARCHAR(500),
  content TEXT NOT NULL,
  image_url VARCHAR(500),
  author VARCHAR(255),
  category VARCHAR(100),
  published BOOLEAN DEFAULT FALSE,
  created_at DATETIME,
  updated_at DATETIME
);
```

### Leads Table
```sql
CREATE TABLE leads (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  source VARCHAR(50),
  created_at DATETIME
);
```

---

## API Endpoints (Backend)

### Blog Endpoints

```bash
# Create blog
POST /blogs
{
  "title": "Blog Title",
  "slug": "blog-slug",
  "excerpt": "Brief summary",
  "content": "Full content",
  "image_url": "https://...",
  "author": "Dr. Name",
  "category": "Nutrition",
  "published": true
}

# Get all blogs
GET /blogs?skip=0&limit=10

# Get specific blog
GET /blogs/{slug}

# Update blog
PUT /blogs/{id}

# Delete blog
DELETE /blogs/{id}
```

### Lead Endpoints

```bash
# Submit lead (automatic emails sent)
POST /leads
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-0123",
  "message": "Message content",
  "source": "contact"
}

# Get all leads
GET /leads?skip=0&limit=50

# Get specific lead
GET /leads/{lead_id}
```

---

## Monitoring & Analytics

### View Leads By Source

Each lead has a **source** field showing where it came from:

| Source | Meaning |
|--------|---------|
| `contact` | Direct contact form |
| `course` | Course enrollment |
| `hero` | Hero section CTA |
| `newsletter` | Newsletter signup |
| `blog` | Blog engagement |

### Export Data

Use the CSV export feature to analyze leads in:
- Microsoft Excel
- Google Sheets
- Spreadsheet software
- Data analysis tools

### Track Performance

```
Example Analysis:
- 50 total leads
- 30 from contact form (60%)
- 20 from course enrollment (40%)
- 10 leads today
- Average response time: < 24 hours
```

---

## Security Considerations

⚠️ **Important**: The admin pages are currently **public**. In production, you should:

1. **Add Authentication**:
   - Username/password for admin panel
   - JWT tokens for API protection

2. **Restrict Endpoints**:
   - Only authenticated users can POST blogs
   - Only authenticated users can GET leads

3. **Environment Variables**:
   - Keep .env secret (never commit to GitHub)
   - Use different credentials for production

### Production Setup

After deploying to Vercel:

1. Set environment variables in Vercel dashboard
2. Add authentication middleware (recommended)
3. Update CORS settings for your domain
4. Consider adding rate limiting

---

## Frequently Asked Questions

**Q: Where are blogs stored?**
A: SQLite database (`app.db` in backend folder). For production, use PostgreSQL.

**Q: Can I upload images instead of using URLs?**
A: Currently requires URLs. You can use free image services like Unsplash.

**Q: Are emails mandatory?**
A: No. System works without email. Forms submit but no emails are sent.

**Q: How many blogs/leads can I store?**
A: Unlimited with SQLite (local). For production, PostgreSQL recommended.

**Q: Can I schedule blog publication?**
A: Not currently. You can use published=false to save drafts, then publish later.

**Q: How do I backup my data?**
A: Download the `app.db` file. For production with PostgreSQL, use database backups.

**Q: Can multiple admins access the panel?**
A: Yes, anyone with the URL can access it (no authentication by default).

---

## Next Steps

1. ✅ **Configure Email**: Set up .env with email credentials
2. ✅ **Create First Blog**: Add a test blog post at /admin/blogs
3. ✅ **Test Lead Submission**: Fill contact form and check email
4. ✅ **Monitor Leads**: View all leads at /admin/leads
5. ✅ **Deploy to Production**: Push to Vercel/production backend

---

## Support

For issues or questions:
1. Check logs at backend Render dashboard
2. Review email configuration in .env
3. Verify database connection
4. Check GitHub issues or documentation

---

**Last Updated**: January 4, 2026
**Version**: 1.0

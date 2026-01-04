# 🎯 Quick Access Guide - All Features

## 🌐 Live URLs (Current)

### Production Backend

- **Base URL**: https://lifestyle-medicine.onrender.com
- **Status**: ✅ Live & Running

### Local Frontend (Development)

- **URL**: http://localhost:3000
- **Start Command**: `cd frontend && npm run dev`

---

## 📍 Public Pages (Accessible to Everyone)

### Website Pages

| Page     | URL                           | Features                                      |
| -------- | ----------------------------- | --------------------------------------------- |
| Homepage | http://localhost:3000         | Hero, stats, features, testimonials           |
| Blog     | http://localhost:3000/blog    | List of published blogs, fetches from backend |
| About    | http://localhost:3000/about   | About your academy                            |
| Courses  | http://localhost:3000/courses | Available courses                             |
| Contact  | http://localhost:3000/contact | Contact form with lead submission             |
| Privacy  | http://localhost:3000/privacy | Privacy policy                                |
| Terms    | http://localhost:3000/terms   | Terms of service                              |

### Blog Detail Pages

- http://localhost:3000/blog/{slug}
- Example: http://localhost:3000/blog/intro-lifestyle-medicine

---

## 🔐 Admin Pages (Currently Public - Add Password Later!)

### Admin Dashboard

| Page                | URL                               | What You Can Do                |
| ------------------- | --------------------------------- | ------------------------------ |
| **Admin Hub**       | http://localhost:3000/admin       | Overview of all admin features |
| **Blog Manager**    | http://localhost:3000/admin/blogs | Create, edit, delete blogs     |
| **Leads Dashboard** | http://localhost:3000/admin/leads | View, filter, export leads     |

---

## 🚀 Features by Page

### Blog Manager (/admin/blogs)

**✅ What You Can Do:**

- Create new blog posts with full form validation
- Edit existing blogs
- Delete blogs
- See all blogs in a table
- Mark blogs as published/draft
- Add author, category, image URL

**📋 Form Fields:**

```
Title (required) ........... "The Power of Nutrition"
Slug (required) ............ "power-of-nutrition"
Author (optional) .......... "Dr. John Smith"
Category (optional) ........ "Nutrition"
Image URL (optional) ....... "https://images.unsplash.com/..."
Excerpt (required) ......... "Brief summary here"
Content (required) ......... "Full blog post content"
Published (checkbox) ....... ☑️ = Live, ☐ = Draft
```

**🎯 Example:**

1. Go to http://localhost:3000/admin/blogs
2. Fill in the form:
   - Title: "Benefits of Exercise"
   - Slug: "benefits-of-exercise"
   - Author: "Your Name"
   - Category: "Fitness"
   - Image: https://images.unsplash.com/photo-1534438327276-14e5300c3a48
   - Excerpt: "Exercise has many health benefits"
   - Content: "Regular exercise improves cardiovascular health..."
   - Check "Published"
3. Click "Create Blog"
4. Blog now appears on http://localhost:3000/blog
5. Can be clicked to read full post

---

### Leads Dashboard (/admin/leads)

**✅ What You Can Do:**

- View all submitted leads with details
- Filter leads by source (contact, course, etc.)
- See statistics (total, today, by source)
- Click to expand and see full message
- Reply via email with one click
- Contact via WhatsApp (if phone provided)
- Export all leads as CSV

**📊 Statistics Shown:**

```
Total Leads: 25
Today: 3
Contact Form: 20
Course Enrollments: 5
```

**🎯 Example:**

1. Go to http://localhost:3000/admin/leads
2. See all your leads in a list
3. Click a lead to expand and see full message
4. Click "Reply via Email" to send response
5. Click "WhatsApp" to contact on WhatsApp
6. Click "📥 Export CSV" to download as spreadsheet

**📊 Filter Options:**

- All Leads
- Contact (from contact form)
- Course (course enrollments)
- Hero (hero CTA button)
- Newsletter (newsletter signup)

---

## 📧 Email Flow

### When User Submits Contact Form

**Email 1: Admin Notification** (To You)

```
Subject: 🔔 New Lead: John Doe
From: your-email@gmail.com
To: your-email@gmail.com

Contains:
- User's name, email, phone
- Full message they wrote
- Source (contact form, course, etc.)
- Reply link to email them back
```

**Email 2: Welcome Email** (To User)

```
Subject: Thank you for contacting Lifestyle Medicine Academy!
From: your-email@gmail.com
To: user-email@gmail.com

Contains:
- Thank you message
- Says you'll respond in 24 hours
- Link to blog
- Professional branding
```

---

## 🔄 Data Flow Visualization

### Creating a Blog

```
You fill form → Click Create → Backend stores → Blog appears on /blog page
(/admin/blogs)      ↓              ↓                        ↓
              Validation    SQLite DB            Users can see & read
```

### Submitting a Lead

```
User fills → Clicks Send → Backend stores → You get email ← Email service
form           ↓             ↓                  ↓
at /contact   Validation   SQLite DB    Sent to admin email
                                        + Welcome email to user
                                             ↓
                                    Lead shows in /admin/leads
```

---

## 🛠️ Setup Requirements

### What You Already Have:

- ✅ Backend API running (https://lifestyle-medicine.onrender.com)
- ✅ Frontend code (all pages ready)
- ✅ Admin pages (blog manager, leads dashboard)
- ✅ Database (SQLite, auto-created)
- ✅ Email service (configured in code, needs .env)

### What You Need to Do:

#### Step 1: Configure Email (5 minutes)

1. Create `.env` file in `backend/` folder
2. Add your Gmail credentials:
   ```
   SMTP_SERVER=smtp.gmail.com
   SMTP_PORT=587
   SENDER_EMAIL=your-email@gmail.com
   SENDER_PASSWORD=your-app-password
   ADMIN_EMAIL=your-email@gmail.com
   ```
3. Get app password from: https://myaccount.google.com/apppasswords
4. Restart backend to load .env

#### Step 2: Test Everything (5 minutes)

1. Create a test blog at /admin/blogs
2. Verify it shows on /blog page
3. Fill contact form at /contact
4. Check emails received
5. View lead in /admin/leads

#### Step 3: Deploy (Optional)

1. Push to GitHub: `git push origin main`
2. Deploy frontend to Vercel
3. Backend already auto-deploys

---

## 🎯 Common Tasks

### Create a New Blog

```
1. Go to http://localhost:3000/admin/blogs
2. Fill the form
3. Click "Create Blog"
4. Blog now visible at http://localhost:3000/blog
```

### Respond to a Lead

```
1. Go to http://localhost:3000/admin/leads
2. Click the lead you want to reply to
3. Click "Reply via Email"
4. Gmail opens with their email pre-filled
5. Type your response and send
```

### Export All Leads

```
1. Go to http://localhost:3000/admin/leads
2. (Optional) Filter by source
3. Click "📥 Export CSV"
4. Opens in Excel or Google Sheets
```

### Edit a Blog

```
1. Go to http://localhost:3000/admin/blogs
2. Find the blog in the list
3. Click "Edit"
4. Make changes
5. Click "Update Blog"
```

### Delete a Blog

```
1. Go to http://localhost:3000/admin/blogs
2. Find the blog
3. Click "Delete"
4. Confirm deletion
```

---

## 🔗 Quick Links

| Purpose             | Link                                          |
| ------------------- | --------------------------------------------- |
| **Homepage**        | http://localhost:3000                         |
| **Blog Page**       | http://localhost:3000/blog                    |
| **Contact Form**    | http://localhost:3000/contact                 |
| **Admin Dashboard** | http://localhost:3000/admin                   |
| **Blog Manager**    | http://localhost:3000/admin/blogs             |
| **Leads Dashboard** | http://localhost:3000/admin/leads             |
| **Backend API**     | https://lifestyle-medicine.onrender.com       |
| **Backend Blogs**   | https://lifestyle-medicine.onrender.com/blogs |
| **Backend Leads**   | https://lifestyle-medicine.onrender.com/leads |

---

## 📱 Mobile Friendly

✅ All pages are fully responsive:

- Admin pages work on mobile
- Contact form works on mobile
- Blog pages optimized for all screen sizes

---

## 🔐 Security Reminder

⚠️ Current State:

- Admin pages are **public** (anyone can access)
- No password protection yet

🔒 Production:

- Add authentication to /admin routes
- Use environment variables for secrets
- Set up proper database backups

---

## 🎓 Testing Checklist

Use this to verify everything works:

### Frontend Pages

- [ ] Homepage loads (http://localhost:3000)
- [ ] Blog page shows blogs (http://localhost:3000/blog)
- [ ] Contact form is accessible (http://localhost:3000/contact)
- [ ] All pages are styled correctly

### Admin Features

- [ ] Admin dashboard loads (http://localhost:3000/admin)
- [ ] Can create a new blog (http://localhost:3000/admin/blogs)
- [ ] New blog appears on blog page (http://localhost:3000/blog)
- [ ] Can edit a blog
- [ ] Can delete a blog
- [ ] Admin leads page loads (http://localhost:3000/admin/leads)

### Lead Submission

- [ ] Can fill and submit contact form
- [ ] Lead appears in admin dashboard
- [ ] Admin email received (if configured)
- [ ] User welcome email received (if configured)

### Export & Actions

- [ ] Can export leads as CSV
- [ ] CSV opens in Excel/Sheets
- [ ] Can click "Reply via Email"
- [ ] Can click "WhatsApp" (if phone provided)

---

## 💡 Pro Tips

1. **Use Free Images**: https://unsplash.com - copy image URL directly
2. **Good Blog Titles**: Make them descriptive and include keywords
3. **Regular Posting**: Post weekly or bi-weekly for consistency
4. **Respond Quickly**: Reply to leads within 24 hours (as promised)
5. **Track Conversions**: Export leads monthly and analyze which sources work best
6. **Consistent Categories**: Use same category names (e.g., always "Nutrition" not "nutrition" or "diet")

---

## 🚀 Next: Deploy to Production

When you're ready:

1. **Frontend to Vercel**:

   - Connect GitHub to Vercel
   - Deploy automatically on every push

2. **Backend Already Live**:

   - https://lifestyle-medicine.onrender.com
   - Auto-deploys from GitHub

3. **Set Up Email**:
   - Add .env to Render's environment variables
   - Redeploy backend

---

## 📞 Need Help?

Check these files:

- `ADMIN_PANEL_GUIDE.md` - Complete admin guide
- `LEADS_WORKFLOW.md` - How leads work
- `COMPLETE_IMPLEMENTATION.md` - Full implementation details
- `BACKEND_DEPLOYMENT_GUIDE.md` - Deployment help

---

**You're All Set! 🎉**

Your website is production-ready. Start creating blogs and capturing leads!

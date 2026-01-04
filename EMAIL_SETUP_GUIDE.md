# 📧 Email Configuration - Setup Guide for jishnuaswin025@gmail.com

## ✅ What You Need to Do

### Step 1: Get Gmail App Password (5 Minutes)

1. **Go to Google Account Settings**:

   - Visit: https://myaccount.google.com/apppasswords
   - You might need to log in

2. **Select App & Device**:

   - Select App: **Mail**
   - Select Device: **Windows Computer**

3. **Google Will Generate Password**:

   - You'll see a 16-character password like: `xyzabc defghij klmn`
   - Copy this password (remove spaces): `xyzabcdefghijklmn`

4. **Save for Later**:
   - You'll use this in the next step

### Step 2: Create `.env` File in Backend

1. **Create file**: `backend/.env`

2. **Copy this content**:

   ```bash
   # Database
   DATABASE_URL=sqlite:///./app.db

   # CORS Origins
   CORS_ORIGINS=http://localhost:3000,http://localhost:3001,http://localhost:8000,https://yourdomain.com

   # Email Configuration
   SMTP_SERVER=smtp.gmail.com
   SMTP_PORT=587
   SENDER_EMAIL=jishnuaswin025@gmail.com
   SENDER_PASSWORD=paste-your-16-char-password-here
   ADMIN_EMAIL=jishnuaswin025@gmail.com

   # API Settings
   API_TITLE=Lifestyle Medicine API
   API_VERSION=0.1.0
   DEBUG=False
   ```

3. **Replace the password**:
   - Change `paste-your-16-char-password-here`
   - With your actual password from Google (no spaces)

### Step 3: Test Email Configuration

1. **Go to contact form**: http://localhost:3000/contact
2. **Fill the form**:
   - Name: Your Name
   - Email: your-email@example.com (any email)
   - Message: Testing email functionality
3. **Submit**
4. **Check your inbox** (jishnuaswin025@gmail.com):
   - Should see 2 emails:
     - **Email 1**: "New Lead: Your Name" (notification to you)
     - **Email 2**: "Thank you for contacting..." (to the person)

---

## 🎬 Live Testing Instructions

### Test 1: Submit a Lead

```
1. Go to: http://localhost:3000/contact
2. Fill form:
   - Name: Test User
   - Email: testuser@example.com
   - Message: This is a test lead
3. Click "Send Message"
4. See: "✅ Thank you! We'll get back to you soon."
```

### Test 2: Check Your Email

```
Check: jishnuaswin025@gmail.com inbox

Expected Emails:
1. Subject: "🔔 New Lead: Test User"
   From: jishnuaswin025@gmail.com
   Contains: Test User's email, phone, message

2. Subject: "Thank you for contacting Lifestyle Medicine Academy!"
   From: jishnuaswin025@gmail.com
   To: testuser@example.com
   Contains: Thank you message
```

### Test 3: Verify in Admin Dashboard

```
1. Go to: http://localhost:3000/admin/leads
2. See your test lead in the list
3. Click to expand
4. Click "Reply via Email"
5. Email client opens - you can reply!
```

### Test 4: Create a Blog

```
1. Go to: http://localhost:3000/admin/blogs
2. Fill form:
   - Title: Test Blog
   - Slug: test-blog
   - Author: Your Name
   - Category: Test
   - Image: https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400
   - Excerpt: This is a test blog
   - Content: This is the full content of the test blog post
3. Click "Create Blog"
4. See: "✅ Blog created successfully!"
5. Go to: http://localhost:3000/blog
6. Your blog should appear there!
```

---

## 📊 Testing Checklist

- [ ] Gmail app password obtained
- [ ] .env file created in backend/ folder
- [ ] Frontend running (npm run dev in frontend/)
- [ ] Contact form submits successfully
- [ ] 2 emails received in jishnuaswin025@gmail.com
- [ ] Lead appears in /admin/leads
- [ ] Blog creation works
- [ ] Blog appears on /blog page
- [ ] Admin dashboard fully functional

---

## 🔧 Troubleshooting

### Email Not Sending?

**Check 1**: Is .env file in correct location?

```bash
ls -la backend/.env
```

Should show file exists.

**Check 2**: Is email password correct?

- Copy directly from Google (no spaces)
- Check for typos

**Check 3**: Frontend using live backend?

```
Check: frontend/.env.local
Should say: NEXT_PUBLIC_API_URL=https://lifestyle-medicine.onrender.com
```

**Check 4**: Backend needs restart

```bash
# If running locally, stop and restart
# If on Render, click "Redeploy" in dashboard
```

### Lead Not Appearing?

**Check 1**: Is frontend using live backend?

```
Go to /admin/leads
Check browser console (F12)
Should see no errors
```

**Check 2**: Is backend running?

```bash
curl https://lifestyle-medicine.onrender.com/blogs
Should return JSON with blogs
```

### Blog Not Appearing?

**Check 1**: Is published checkbox checked?

- When creating blog, check the "Published" box

**Check 2**: Does blog have valid slug?

- Slug must be lowercase with hyphens
- Example: `my-test-blog`

**Check 3**: Refresh page

```
Go to /blog page
Refresh browser (Ctrl+R)
Should appear
```

---

## 📧 Email Templates You'll Receive

### Email 1: Admin Notification

```
FROM: jishnuaswin025@gmail.com
TO: jishnuaswin025@gmail.com
SUBJECT: 🔔 New Lead: [Name of Person]

Beautiful HTML with:
- Person's name (large heading)
- Source badge (CONTACT/COURSE/etc)
- Email address (clickable)
- Phone number
- Full message in quoted box
- Reply option
```

### Email 2: Welcome Email to User

```
FROM: jishnuaswin025@gmail.com
TO: [user's email]
SUBJECT: Thank you for contacting Lifestyle Medicine Academy!

Beautiful HTML with:
- Personalized greeting
- Thank you message
- "We'll respond within 24 hours"
- Link to blog
- Professional signature
```

---

## ✅ Expected Results

### After Email Setup:

1. **Leads Page** (`/admin/leads`):

   - Shows all submitted leads
   - Statistics at top
   - Filter by source
   - Can expand each lead
   - Can reply via email

2. **Email Inbox**:

   - Gets admin notification for each lead
   - Each lead sender gets welcome email

3. **Blogs Page** (`/blog`):

   - Shows all published blogs
   - Each blog has image, author, category
   - Click to read full blog
   - Beautiful card design

4. **Admin Blog Manager** (`/admin/blogs`):
   - Create new blogs
   - Edit existing blogs
   - Delete blogs
   - Publish/draft toggle
   - See all blogs with status

---

## 🎉 You're Ready!

Once you complete the .env setup, you'll have:

✅ **Fully functional lead capture**
✅ **Email notifications working**
✅ **Blog management system**
✅ **Admin dashboard**
✅ **Everything ready to launch**

---

**Next Steps**:

1. [ ] Get Gmail app password
2. [ ] Create backend/.env file
3. [ ] Test lead submission
4. [ ] Check email inbox
5. [ ] Test admin pages
6. [ ] Deploy to production (optional)

---

Last Updated: January 4, 2026

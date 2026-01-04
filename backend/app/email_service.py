"""
Email service for sending notifications
Supports SMTP (Gmail, Outlook, etc.) and other email providers
"""

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional
import os
from dotenv import load_dotenv

load_dotenv()


class EmailService:
    """Email service for sending emails"""

    def __init__(self):
        self.smtp_server = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        self.smtp_port = int(os.getenv("SMTP_PORT", 587))
        self.sender_email = os.getenv("SENDER_EMAIL", "")
        self.sender_password = os.getenv("SENDER_PASSWORD", "")
        self.admin_email = os.getenv("ADMIN_EMAIL", "")

    def send_lead_notification(
        self, 
        lead_name: str, 
        lead_email: str, 
        lead_phone: Optional[str],
        lead_message: str,
        lead_source: str
    ) -> bool:
        """
        Send email notification when a new lead is submitted
        
        Args:
            lead_name: Name of the lead
            lead_email: Email of the lead
            lead_phone: Phone number of the lead
            lead_message: Message from the lead
            lead_source: Source of the lead (contact, course, etc.)
            
        Returns:
            True if email sent successfully, False otherwise
        """
        if not self.sender_email or not self.sender_password or not self.admin_email:
            print("⚠️  Email configuration missing. Skipping email notification.")
            return False

        try:
            # Create email message
            msg = MIMEMultipart("alternative")
            msg["Subject"] = f"🔔 New Lead: {lead_name}"
            msg["From"] = self.sender_email
            msg["To"] = self.admin_email

            # Plain text version
            text = f"""
New Lead Submitted

Name: {lead_name}
Email: {lead_email}
Phone: {lead_phone or 'Not provided'}
Source: {lead_source.upper()}

Message:
{lead_message}

---
Reply to: {lead_email}
            """.strip()

            # HTML version
            html = f"""
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
      <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #FF9664; margin-top: 0;">🔔 New Lead Submitted</h2>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin: 15px 0;">
          <p><strong>Name:</strong> {lead_name}</p>
          <p><strong>Email:</strong> <a href="mailto:{lead_email}">{lead_email}</a></p>
          <p><strong>Phone:</strong> {lead_phone or 'Not provided'}</p>
          <p><strong>Source:</strong> <span style="background-color: #FF9664; color: white; padding: 2px 8px; border-radius: 3px; font-size: 12px;">{lead_source.upper()}</span></p>
        </div>
        
        <div style="margin: 15px 0;">
          <h3>Message:</h3>
          <p style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #FF9664;">
            {lead_message}
          </p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
          <p>Reply to: <a href="mailto:{lead_email}">{lead_email}</a></p>
          <p>View all leads at your admin dashboard</p>
        </div>
      </div>
    </div>
  </body>
</html>
            """.strip()

            # Attach both plain text and HTML
            part1 = MIMEText(text, "plain")
            part2 = MIMEText(html, "html")
            msg.attach(part1)
            msg.attach(part2)

            # Send email
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.sender_email, self.sender_password)
                server.send_message(msg)

            print(f"✅ Email sent to {self.admin_email}")
            return True

        except Exception as e:
            print(f"❌ Error sending email: {str(e)}")
            return False

    def send_welcome_email(self, lead_name: str, lead_email: str) -> bool:
        """
        Send welcome email to the lead after submission
        
        Args:
            lead_name: Name of the lead
            lead_email: Email of the lead
            
        Returns:
            True if email sent successfully, False otherwise
        """
        if not self.sender_email or not self.sender_password:
            return False

        try:
            msg = MIMEMultipart("alternative")
            msg["Subject"] = "Thank you for contacting Lifestyle Medicine Academy!"
            msg["From"] = self.sender_email
            msg["To"] = lead_email

            text = f"""
Hi {lead_name},

Thank you for contacting Lifestyle Medicine Academy!

We've received your message and will get back to you within 24 hours with more information about our courses and services.

In the meantime, feel free to explore our blog at https://lifestyle-medicine-academy.com/blog

Best regards,
The Lifestyle Medicine Academy Team
            """.strip()

            html = f"""
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #FF9664;">Thank you for contacting us!</h2>
        
        <p>Hi <strong>{lead_name}</strong>,</p>
        
        <p>We've received your message and will get back to you within 24 hours with more information about our courses and services.</p>
        
        <p>In the meantime, feel free to explore our <a href="https://lifestyle-medicine-academy.com/blog" style="color: #FF9664;">blog</a> for helpful articles on health and wellness.</p>
        
        <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
          <p>Best regards,<br><strong style="color: #FF9664;">The Lifestyle Medicine Academy Team</strong></p>
        </div>
      </div>
    </div>
  </body>
</html>
            """.strip()

            part1 = MIMEText(text, "plain")
            part2 = MIMEText(html, "html")
            msg.attach(part1)
            msg.attach(part2)

            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.sender_email, self.sender_password)
                server.send_message(msg)

            print(f"✅ Welcome email sent to {lead_email}")
            return True

        except Exception as e:
            print(f"❌ Error sending welcome email: {str(e)}")
            return False


# Initialize email service
email_service = EmailService()

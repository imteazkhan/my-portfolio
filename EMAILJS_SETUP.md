# EmailJS Setup Guide

Follow these steps to set up email functionality for your contact form:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (imteazkhan12@gmail.com)
5. Note down the **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Imteaz,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Save the template and note down the **Template ID**

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (User ID)

## 5. Update Environment Variables
1. Open `.env.local` file in your project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Form
1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check your Gmail inbox for the message

## 7. Gmail Configuration (if needed)
If emails aren't arriving:
1. Check your Gmail spam folder
2. Add noreply@emailjs.com to your contacts
3. Enable "Less secure app access" in Gmail settings (if using Gmail)

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Basic support

## Troubleshooting
- Make sure all environment variables are set correctly
- Check browser console for any errors
- Verify your EmailJS service is active
- Test with a simple template first

That's it! Your contact form will now send emails directly to your Gmail inbox.
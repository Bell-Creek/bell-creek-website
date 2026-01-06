# Netlify Email Setup Guide

## Overview
The contact form on your website is now connected to a Netlify Function that forwards submissions to **info@bell-creek.com**.

## Setup Instructions

### 1. Install SendGrid Package
Run the following command in your project directory:

```bash
npm install @sendgrid/mail
```

### 2. Get SendGrid API Key
1. Go to [SendGrid](https://sendgrid.com) and sign up for a free account (or log in)
2. Navigate to **Settings → API Keys**
3. Click **Create API Key**
4. Give it a name like "Bell Creek Partners Website"
5. Copy the API key (you'll only see it once, so save it somewhere safe)

### 3. Add Environment Variable to Netlify
1. Go to your [Netlify Dashboard](https://app.netlify.com)
2. Select your Bell Creek Partners site
3. Go to **Site Settings → Build & Deploy → Environment**
4. Click **Add environment variables**
5. Add a new variable:
   - **Key:** `SENDGRID_API_KEY`
   - **Value:** [Paste the API key you copied from SendGrid]
6. Click **Save**

### 4. Redeploy Your Site
Once the environment variable is set, redeploy your site:

```bash
npm run build
git add .
git commit -m "Add email configuration"
git push
```

Netlify will automatically redeploy with the new environment variable.

### 5. Test the Form
Visit your website and submit a test form from the contact section. You should receive an email at info@bell-creek.com shortly.

## How It Works

1. User fills out the contact form on your website
2. Form is submitted to the Netlify Function: `/.netlify/functions/send-email`
3. The function validates the data and sends it via SendGrid
4. Email is delivered to info@bell-creek.com with all form details
5. User gets a success message

## Troubleshooting

### Email not being sent
1. Check that the environment variable is set correctly in Netlify dashboard
2. Check Netlify function logs:
   - Go to **Netlify Dashboard → Site → Functions → send-email → Logs**
3. Verify SendGrid API key is valid
4. Check that SendGrid account has sufficient email sending quota

### Test Email
You can test sending an email using curl:

```bash
curl -X POST https://your-site.netlify.app/.netlify/functions/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "interesse": "Immobilientransaktion",
    "telefon": "+49 123 456789",
    "unternehmen": "Test Company",
    "nachricht": "This is a test message"
  }'
```

## Alternative Email Services

If you prefer not to use SendGrid, you can modify the function to use:

- **Mailgun** - Similar setup, different API
- **Nodemailer** - Uses SMTP (requires email provider credentials)
- **AWS SES** - Good if you're already on AWS

Just contact the developer to switch services.

## Local Development

To test the email function locally:

1. Create a `.env.local` file in your project root:
```
SENDGRID_API_KEY=your_api_key_here
```

2. Run the development server with Netlify CLI:
```bash
npm install -g netlify-cli
netlify dev
```

3. The function will be available at `http://localhost:8888/.netlify/functions/send-email`

## Email Fields

When a form is submitted, the email includes:
- **Name** - Submitter's name
- **E-Mail** - Submitter's email (used as reply-to)
- **Telefon** - Phone number (optional)
- **Unternehmen** - Company name (optional)
- **Interesse** - Interest category
- **Nachricht** - Message content (optional)

## Email From Address

Currently emails are sent from `noreply@bell-creek.com`. To change this:

1. Update `netlify/functions/send-email.ts` line with `from:`
2. Make sure the email is verified in your SendGrid account
3. Redeploy

## Support

For issues or questions about the setup, contact your developer.

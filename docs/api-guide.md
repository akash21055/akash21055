# API Integration Guide

This guide explains how to implement live form submission for the consultation form.

## Current State

The consultation form in `src/components/Consultation.tsx` is a **stub** with no backend integration. Form submission logs to console and shows a success message.

## Option 1: Using Resend (Recommended)

Resend is an email API perfect for transactional emails.

### Setup

1. **Create a Resend account** at [resend.com](https://resend.com)
2. **Get your API key** from the dashboard
3. **Add to `.env.local`**:

```env
RESEND_API_KEY=your_api_key_here
```

### Create API Route

Create `src/app/api/consultations/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, zodiac, service, message } = await request.json();

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'consultations@yourdomain.com',
      to: 'admin@yourdomain.com',
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Zodiac:</strong> ${zodiac}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send confirmation email to client
    const clientEmail = await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: email,
      subject: 'We Received Your Consultation Request',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We've received your consultation request and will contact you within 24 hours.</p>
        <p>In the meantime, explore more about your zodiac sign on our site.</p>
        <p>Best regards,<br/>AstroGuide Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Consultation request submitted' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit request' },
      { status: 500 }
    );
  }
}
```

### Install Resend SDK

```bash
npm install resend
```

### Update Consultation Component

In `src/components/Consultation.tsx`, update `handleSubmit`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/consultations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", zodiac: "", service: "", message: "" });
      }, 3000);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to submit. Please try again.');
  }
};
```

## Option 2: Using Formspree (Simplest)

Formspree is the easiest option for static sites.

### Setup

1. **Go to** [formspree.io](https://formspree.io)
2. **Create a form** and get your form ID
3. **Update the form** in `src/components/Consultation.tsx`:

```tsx
<form action={`https://formspree.io/f/YOUR_FORM_ID`} method="POST">
  {/* form fields stay the same, but name attributes must match */}
  <input name="name" required />
  <input name="email" type="email" required />
  {/* ... */}
</form>
```

## Option 3: Custom Backend

For full control, create a custom Node.js/Express backend:

```typescript
// Backend example (Express)
import nodemailer from 'nodemailer';

app.post('/api/consultations', async (req, res) => {
  const { name, email, zodiac, service, message } = req.body;

  // Send email using nodemailer or similar
  // Save to database
  // Return response

  res.json({ success: true });
});
```

## Best Practices

1. **Validate input** server-side, not just client-side
2. **Rate limit** to prevent spam
3. **Use HTTPS** in production
4. **Never expose API keys** in client-side code
5. **Send confirmation emails** to both admin and user
6. **Log submissions** for analytics

## Testing

1. Fill out the form at http://localhost:3000
2. Check that API is called (Network tab in DevTools)
3. Verify email is received
4. Check success message appears

## Environment Variables

Never commit sensitive keys. Use `.env.local`:

```env
# .env.local (add to .gitignore)
RESEND_API_KEY=re_xxxxxxxxxxxxx
NEXT_PUBLIC_ANALYTICS_ID=xxx
```

## Monitoring & Analytics

Consider adding:
- Email delivery tracking
- Form submission analytics
- Error logging (Sentry)
- Customer database (Supabase, Firebase)

See main documentation for more guidance.

# Guide: Form Handling Pattern

**Purpose**: Document the standard form implementation pattern for lead generation and data collection

**When to Use**: Any form that collects user data (consultation, contact, signup)

---

## Principle

**Industry Standard**: Use controlled components with React hooks for form state management.

Benefits:
- Single source of truth (state)
- Real-time validation possible
- Easy to clear/reset form
- Type-safe with TypeScript

---

## Our Implementation

### Form Component Template

**File**: src/components/Consultation.tsx

```tsx
"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  zodiac: string;
  service: string;
  message: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    zodiac: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.service) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      // Submit to API (see docs/api-guide.md)
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            email: "",
            zodiac: "",
            service: "",
            message: "",
          });
        }, 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success message */}
      {submitted && (
        <div className="text-green-400 text-lg font-semibold">
          ✓ Thank you for your interest!
        </div>
      )}

      {/* Text input */}
      <div>
        <label className="block text-sm font-medium mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-violet-500"
          placeholder="Your name"
        />
      </div>

      {/* Email input */}
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-violet-500"
          placeholder="your@email.com"
        />
      </div>

      {/* Select input */}
      <div>
        <label className="block text-sm font-medium mb-2">Service</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-violet-500"
        >
          <option value="">Select service</option>
          <option value="birth-chart">Birth Chart Reading</option>
          <option value="compatibility">Compatibility Report</option>
          <option value="guidance">Life Guidance</option>
        </select>
      </div>

      {/* Textarea input */}
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-violet-500"
          placeholder="Tell us what you're looking for..."
        />
      </div>

      {/* Submit button */}
      <button type="submit" className="btn-primary w-full">
        Request Reading
      </button>
    </form>
  );
}
```

---

## Form Input Types

### Do's and Don'ts

| ✅ Do | ❌ Don't | Why |
|------|---------|-----|
| Use `name` attribute matching state key | Use different names for state/input | Input name must match object key |
| Use `value={formData.field}` for controlled input | Omit value (uncontrolled) | Controlled = React manages state |
| Use `required` attribute | Validate only in JavaScript | HTML `required` provides instant feedback |
| Bind `name` to `handleChange` | Create separate handler per field | Single handler scales to many fields |
| Use `<label>` for each input | Omit label (accessibility issue) | Screen readers need labels |
| Use appropriate `type` (email, tel, etc) | Use type="text" for everything | Browsers provide validation/keyboards |

---

## Input Components Reference

### Text Input

```tsx
<div>
  <label className="block text-sm font-medium mb-2">Field Name</label>
  <input
    type="text"
    name="fieldName"
    value={formData.fieldName}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-violet-500"
    placeholder="Placeholder text"
  />
</div>
```

### Email Input

```tsx
<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
  className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg"
  placeholder="user@example.com"
/>
```

### Select Dropdown

```tsx
<select
  name="service"
  value={formData.service}
  onChange={handleChange}
  required
  className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg"
>
  <option value="">-- Select --</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
```

### Textarea

```tsx
<textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows={4}
  className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg"
  placeholder="Your message..."
/>
```

### Checkbox

```tsx
<label className="flex items-center gap-2">
  <input
    type="checkbox"
    name="agreeToTerms"
    checked={formData.agreeToTerms}
    onChange={(e) =>
      setFormData((prev) => ({ ...prev, agreeToTerms: e.target.checked }))
    }
  />
  I agree to the terms
</label>
```

### Radio Buttons

```tsx
<fieldset>
  <legend className="font-medium mb-2">Select one:</legend>
  <label className="flex items-center gap-2">
    <input
      type="radio"
      name="choice"
      value="option1"
      checked={formData.choice === "option1"}
      onChange={handleChange}
    />
    Option 1
  </label>
  <label className="flex items-center gap-2">
    <input
      type="radio"
      name="choice"
      value="option2"
      checked={formData.choice === "option2"}
      onChange={handleChange}
    />
    Option 2
  </label>
</fieldset>
```

---

## Form Validation

### Client-Side Validation

**Built-in HTML5:**
```tsx
<input type="email" required /> {/* Browser validates email format */}
<input type="tel" required />    {/* Shows number keyboard on mobile */}
<input minLength={8} />          {/* Minimum 8 characters */}
```

**JavaScript Validation:**
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Validate required fields
  if (!formData.name) {
    alert("Name is required");
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Invalid email format");
    return;
  }

  // All valid, submit
  submitForm();
};
```

### Server-Side Validation

Always validate on backend (HTML validation can be bypassed):

```typescript
// src/app/api/consultations/route.ts
export async function POST(request: NextRequest) {
  const { name, email, service } = await request.json();

  // Validate required fields
  if (!name || !email || !service) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Validate email
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  // Process request...
}
```

---

## Form Submission

### Option 1: Client-Side API Call

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch("/api/consultations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setSubmitted(true);
  }
};
```

### Option 2: Formspree

```tsx
<form action={`https://formspree.io/f/FORM_ID`} method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <button type="submit">Submit</button>
</form>
```

See `docs/api-guide.md` for full setup options (Resend, Formspree, custom).

---

## Accessibility

### Form Labels

Always use `<label>` with `htmlFor`:

```tsx
<label htmlFor="name-input" className="block text-sm font-medium mb-2">
  Full Name
</label>
<input id="name-input" type="text" name="name" required />
```

Screen readers will announce: "Full Name, text input"

### ARIA Attributes

For validation messages:

```tsx
<div>
  <input
    aria-describedby="email-error"
    type="email"
    value={formData.email}
  />
  {emailError && (
    <div id="email-error" className="text-red-500 text-sm mt-1">
      {emailError}
    </div>
  )}
</div>
```

---

## Performance Tips

### Debounce on Change

For expensive validations (username availability check):

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));

  // Debounce validation (wait 500ms after user stops typing)
  clearTimeout(validationTimeout);
  validationTimeout = setTimeout(() => {
    validateUsername(value);
  }, 500);
};
```

### Avoid Re-renders

Use `useCallback` to prevent form functions from changing on every render:

```tsx
const handleChange = useCallback(
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  },
  []
);
```

---

## Links

- **React Forms**: https://react.dev/reference/react-dom/components/input
- **Form Submission**: docs/api-guide.md (Resend, Formspree, custom API)
- **Validation**: docs/design-guidelines.md (accessibility standards)
- **ADR Context**: [ADR-003: Component Architecture](../adrs/adr-003-component-architecture.md)

---

**Last Updated**: 2026-04-24  
**Used By**: Consultation form, future contact/signup forms

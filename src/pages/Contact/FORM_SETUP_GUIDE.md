# Contact Form Implementation Guide

## Overview
The Contact form on the `/contact` page is now fully functional with form validation, state management, and email submission via Web3Forms.

## Features Implemented

### ✅ Form Functionality
- **Controlled Inputs**: All form fields are controlled components with React state
- **Validation**: Required fields (Name, Email, Message) with HTML5 validation
- **Loading States**: Button shows "Sending..." and disables inputs during submission
- **Success Feedback**: Green success message appears after successful submission
- **Error Handling**: Red error message displays if submission fails
- **Auto-reset**: Form clears after successful submission
- **Auto-dismiss**: Success message disappears after 5 seconds

### ✅ Form Fields
1. **Name** * (Required)
2. **Email** * (Required, validates email format)
3. **Current Affiliation & Role** (Optional)
4. **Topic** (Optional)
5. **Message** * (Required)

## Setup Instructions

### Step 1: Get Web3Forms Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Click "Get Started - It's Free"
3. Enter your email address (where you want to receive form submissions)
4. You'll receive an **Access Key** via email
5. Copy this access key

### Step 2: Configure the Form

Open `src/pages/Contact/Contact.jsx` and find line 50:

```javascript
access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your Web3Forms access key
```

Replace `"YOUR_ACCESS_KEY_HERE"` with your actual access key from Web3Forms:

```javascript
access_key: "abc123def-4567-890g-hijk-lmnopqrstuv", // Your actual key
```

### Step 3: Test the Form

1. Run your development server: `npm run dev`
2. Navigate to `/contact`
3. Scroll to the "Send an Enquiry" section
4. Fill out the form and submit
5. You should receive the submission at the email you registered with Web3Forms

## How It Works

### Form State Management

```javascript
const [formData, setFormData] = useState({
  name: "",
  email: "",
  role: "",
  topic: "",
  message: "",
});

const [formStatus, setFormStatus] = useState({
  submitting: false,  // True while sending
  submitted: false,   // True after successful send
  error: null,        // Contains error message if failed
});
```

### Submission Flow

1. **User fills form** → Fields update `formData` state
2. **User clicks submit** → Form validation runs
3. **Validation passes** → `formStatus.submitting = true`
4. **API call to Web3Forms** → Sends data via POST request
5. **Success** → Show success message, reset form
6. **Error** → Show error message with details

### Email Format

When submitted, the form sends an email with:
- **To**: Your registered email
- **Subject**: "ACT Centre Contact Form - [Topic]" or "ACT Centre Contact Form - General Enquiry"
- **Body**: Includes all form fields

## Alternative Form Services

If you prefer not to use Web3Forms, you can easily switch to:

### Option 1: FormSubmit
```javascript
const response = await fetch("https://formsubmit.co/your@email.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

### Option 2: EmailJS
```javascript
import emailjs from '@emailjs/browser';

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

### Option 3: Custom Backend
Create your own API endpoint and update the fetch URL:
```javascript
const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

## Styling

### Success Message
- Green background with border
- Check mark icon (✓)
- Auto-dismisses after 5 seconds

### Error Message  
- Red background with border
- X icon (✗)
- Displays error message
- Stays until next submission

### Disabled State
- Inputs and button are disabled during submission
- Grayed out appearance
- "Sending..." text on button
- Cursor changes to not-allowed

## Form Validation

### Client-side (HTML5)
- Email field validates format automatically
- Required fields marked with *
- Browser shows validation messages

### Server-side (Web3Forms)
- Validates email format
- Checks for spam
- Rate limiting protection

## Security Features

### Web3Forms provides:
- **Spam Protection**: Built-in spam filtering
- **Rate Limiting**: Prevents abuse
- **No CORS Issues**: Handles cross-origin requests
- **SSL/TLS**: Encrypted transmission
- **Privacy**: No data storage (emails directly to you)

## Troubleshooting

### Form not sending emails
1. Check if you replaced the access key
2. Verify the access key is correct (check email from Web3Forms)
3. Check browser console for errors
4. Ensure internet connection is stable

### Getting error message
- Check the error text in the red message box
- Verify email address format is correct
- Ensure required fields are filled
- Check network tab in browser dev tools

### Success message not showing
- Check if `result.success` is true in the response
- Look for console errors
- Verify the API response format

## Customization Options

### Change success message duration
```javascript
setTimeout(() => {
  setFormStatus({ submitting: false, submitted: false, error: null });
}, 5000); // Change 5000 to desired milliseconds
```

### Add custom fields
1. Add to `formData` state
2. Add input field in JSX
3. Add to `body: JSON.stringify({...})` in handleSubmit

### Change email subject
```javascript
subject: `ACT Centre Contact Form - ${formData.topic || 'General Enquiry'}`,
```

### Add notification email recipients
In Web3Forms dashboard, you can configure multiple recipients.

## Files Modified

1. **`src/pages/Contact/Contact.jsx`**
   - Added useState imports
   - Added form state management
   - Added handleSubmit function
   - Added value bindings and onChange handlers
   - Added success/error message display

2. **`src/pages/Contact/Contact.css`**
   - Added `.contact-form-success` styles
   - Added `.contact-form-error` styles
   - Added disabled state styles for inputs and buttons

## Testing Checklist

- [ ] Form loads without errors
- [ ] All fields can be typed in
- [ ] Required fields show validation errors when empty
- [ ] Email field validates email format
- [ ] Submit button disabled during submission
- [ ] Success message appears after successful send
- [ ] Form resets after successful send
- [ ] Error message appears if submission fails
- [ ] Success message auto-dismisses after 5 seconds
- [ ] Received email at registered address

## Production Considerations

### Before deploying:
1. ✅ Replace access key with production key
2. ✅ Test form on staging environment
3. ✅ Set up email forwarding if needed
4. ✅ Configure spam filters
5. ✅ Add Google reCAPTCHA (optional, via Web3Forms)
6. ✅ Set up email templates in Web3Forms dashboard
7. ✅ Configure auto-response emails (optional)

### Monitoring:
- Check Web3Forms dashboard for submission statistics
- Monitor email inbox for form submissions
- Review error logs in browser console

## Support

- **Web3Forms Documentation**: https://docs.web3forms.com
- **Web3Forms Support**: support@web3forms.com
- **Free Plan Limits**: 250 submissions/month
- **Upgrade**: Available for higher volumes

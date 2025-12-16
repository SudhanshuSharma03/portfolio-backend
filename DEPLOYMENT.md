# Portfolio Backend Deployment Guide

## Environment Variables Setup

When deploying to Vercel, add these environment variables in your project settings:

```
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
EMAIL_USER=sudhan98216@gmail.com
EMAIL_PASS=your-app-password-here
RECIPIENT_EMAIL=sudhan98216@gmail.com
```

⚠️ **IMPORTANT:** Never commit your `.env` file to GitHub!

## Deployment Steps

1. Push this repository to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The `.env` file is already in `.gitignore` and will not be pushed to GitHub.

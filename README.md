# Portfolio Backend API

Express.js backend for portfolio website contact form functionality.

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and fill in your details:

```bash
cp .env.example .env
```

### 3. Gmail App Password Setup
To send emails via Gmail:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → 2-Step Verification → App passwords
4. Create a new app password for "Mail"
5. Copy the 16-character password to `EMAIL_PASS` in `.env`

### 4. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server status

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

## Project Structure
```
backend/
├── server.js              # Main Express server
├── config/
│   └── email.js          # Nodemailer configuration
├── controllers/
│   └── contactController.js  # Contact form logic
├── routes/
│   └── contact.js        # API routes
├── .env                  # Environment variables (create this)
├── .env.example          # Environment template
├── .gitignore
└── package.json
```

## Technologies Used
- Express.js - Web framework
- Nodemailer - Email sending
- CORS - Cross-origin resource sharing
- dotenv - Environment variable management

## Troubleshooting

**Email not sending?**
- Check your Gmail app password is correct
- Make sure 2FA is enabled on your Google account
- Check if "Less secure app access" is enabled (if not using app password)

**CORS errors?**
- Verify `FRONTEND_URL` in `.env` matches your frontend URL
- Check that frontend is running on the correct port

## Deployment
When deploying to production:
1. Set `NODE_ENV=production`
2. Use your production frontend URL in `FRONTEND_URL`
3. Keep your `.env` file secure and never commit it to version control

import transporter from '../config/email.js';

export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, and message'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 3px solid #6366f1; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> <span style="color: #333;">${name}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #6366f1; border-radius: 5px;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #888; font-size: 12px;">
              <p>This email was sent from your portfolio contact form</p>
              <p>Received on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

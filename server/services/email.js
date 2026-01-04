import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

// Notify business of new submission
async function sendSubmissionNotification(submission, photos) {
  const { id, item_type, brand, model, condition, box_papers, description, name, email, phone, contact_preference, source } = submission

  // Build email body
  const body = `
New submission received!

SUBMISSION ID: ${id}

ITEM DETAILS:
- Type: ${item_type}
- Brand: ${brand || 'N/A'}
- Model: ${model || 'N/A'}
- Condition: ${condition || 'N/A'}
- Box & Papers: ${box_papers || 'N/A'}
- Description: ${description || 'N/A'}
- Photos: ${photos.length} attached

SELLER INFO:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Preferred Contact: ${contact_preference || 'N/A'}
- Source: ${source || 'N/A'}

---
Respond within 2 hours!
  `.trim()

  // Build attachments from photo buffers
  const attachments = photos.map((photo, index) => ({
    filename: `photo-${index + 1}.jpg`,
    content: photo.buffer,
    contentType: photo.mimetype
  }))

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Send to yourself for now
    subject: `New Submission: ${item_type}${brand ? ` - ${brand}` : ''} from ${name}`,
    text: body,
    attachments
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log(`Email notification sent for submission ${id}`)
    return true
  } catch (error) {
    console.error('Email send error:', error)
    return false
  }
}

// Send confirmation email to customer
async function sendConfirmationEmail({ name, email, itemType, brand, model }) {
  const itemDescription = [brand, model].filter(Boolean).join(' ') || itemType

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
      <h1 style="color: #1c1917; font-size: 24px; margin-bottom: 24px;">We've Received Your Submission</h1>

      <p style="color: #44403c; font-size: 16px; line-height: 1.6;">Hi ${name},</p>

      <p style="color: #44403c; font-size: 16px; line-height: 1.6;">
        Thank you for submitting your <strong>${itemDescription}</strong> to Crown and Karat.
        We've received your information and photos.
      </p>

      <p style="color: #44403c; font-size: 16px; line-height: 1.6;">
        <strong>What happens next:</strong>
      </p>

      <ul style="color: #44403c; font-size: 16px; line-height: 1.8;">
        <li>Our team will review your submission</li>
        <li>You'll receive a preliminary offer within 2 hours (during business hours)</li>
        <li>If you accept, we'll send a free insured shipping label</li>
      </ul>

      <p style="color: #44403c; font-size: 16px; line-height: 1.6;">
        Questions? Reply to this email or call us at <strong>(214) 555-0123</strong>.
      </p>

      <p style="color: #44403c; font-size: 16px; line-height: 1.6; margin-top: 32px;">
        Best,<br>
        Parker Lee<br>
        <span style="color: #78716c;">Crown and Karat</span>
      </p>

      <hr style="border: none; border-top: 1px solid #e7e5e4; margin: 32px 0;">

      <p style="color: #a8a29e; font-size: 12px;">
        Crown and Karat · Dallas, TX<br>
        Fully insured · No-risk guarantee
      </p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Crown and Karat" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We received your ${itemDescription} submission`,
      html
    })
    console.log('Confirmation email sent to:', email)
    return true
  } catch (error) {
    console.error('Confirmation email error:', error)
    return false
  }
}

export { sendSubmissionNotification, sendConfirmationEmail }

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

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
    to: 'sell@crownandkarat.com',
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

export { sendSubmissionNotification }

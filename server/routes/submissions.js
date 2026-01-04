import express from 'express'
import multer from 'multer'
import { pool } from '../db/index.js'
import { sendSubmissionNotification, sendConfirmationEmail } from '../services/email.js'

const router = express.Router()

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB per file
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true)
    } else {
      cb(new Error('Only images allowed'), false)
    }
  }
})

// POST /api/submissions - Create new submission
router.post('/', upload.array('photos', 10), async (req, res) => {
  console.log('=== NEW SUBMISSION REQUEST ===')
  console.log('Body keys:', Object.keys(req.body))
  console.log('Files:', req.files?.length || 0)

  try {
    const {
      item_type,
      brand,
      model,
      condition,
      box_papers,
      description,
      name,
      email,
      phone,
      contact_preference,
      source
    } = req.body

    // Validate required fields
    if (!item_type || !name || !email || !phone) {
      console.log('Validation failed:', { item_type, name, email, phone })
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        required: ['item_type', 'name', 'email', 'phone'],
        received: { item_type: !!item_type, name: !!name, email: !!email, phone: !!phone }
      })
    }

    // Convert uploaded files to buffers
    const photos = req.files ? req.files.map(f => f.buffer) : []
    const photo_mimetypes = req.files ? req.files.map(f => f.mimetype) : []

    console.log('Inserting into database...')
    console.log('Item type:', item_type)
    console.log('Photos count:', photos.length)

    const result = await pool.query(
      `INSERT INTO submissions
       (item_type, brand, model, condition, box_papers, description,
        photos, photo_mimetypes, photo_count, name, email, phone, contact_preference, source)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
       RETURNING *`,
      [
        item_type,
        brand || null,
        model || null,
        condition || null,
        box_papers || null,
        description || null,
        photos.length > 0 ? photos : null,
        photo_mimetypes.length > 0 ? photo_mimetypes : null,
        photos.length,
        name,
        email,
        phone,
        contact_preference || null,
        source || null
      ]
    )

    const submission = result.rows[0]
    console.log('Submission created:', submission.id)

    // Send email notification to business (non-blocking)
    sendSubmissionNotification(submission, req.files || []).catch(err => {
      console.error('Notification email failed:', err)
    })

    // Send confirmation email to customer (non-blocking)
    sendConfirmationEmail({
      name,
      email,
      itemType: item_type,
      brand,
      model
    }).catch(err => {
      console.error('Confirmation email failed:', err)
    })

    res.status(201).json({
      success: true,
      submission_id: submission.id,
      created_at: submission.created_at
    })

  } catch (error) {
    console.error('=== SUBMISSION ERROR ===')
    console.error('Error name:', error.name)
    console.error('Error message:', error.message)
    console.error('Error code:', error.code)
    console.error('Error stack:', error.stack)

    // Check for specific database errors
    if (error.code === '42P01') {
      return res.status(500).json({
        success: false,
        error: 'Database table does not exist. Run schema.sql.'
      })
    }
    if (error.code === '28P01') {
      return res.status(500).json({
        success: false,
        error: 'Database authentication failed. Check DATABASE_URL.'
      })
    }
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({
        success: false,
        error: 'Cannot connect to database. Check DATABASE_URL.'
      })
    }

    res.status(500).json({
      success: false,
      error: 'Failed to create submission',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
})

// GET /api/submissions/:id - Get submission by ID (for future admin)
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      'SELECT id, created_at, status, item_type, brand, model, condition, box_papers, description, photo_count, name, email, phone, contact_preference, source, notes, offer_amount FROM submissions WHERE id = $1',
      [id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Submission not found' })
    }

    res.json({ success: true, submission: result.rows[0] })
  } catch (error) {
    console.error('Fetch error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch submission' })
  }
})

export default router

import express from 'express'
import multer from 'multer'
import { pool } from '../db/index.js'
import { sendSubmissionNotification } from '../services/email.js'

const router = express.Router()

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB per file
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true)
    } else {
      cb(new Error('Only images allowed'), false)
    }
  }
})

// POST /api/submissions - Create new submission
router.post('/', upload.array('photos', 5), async (req, res) => {
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

    // Convert uploaded files to buffers
    const photos = req.files ? req.files.map(f => f.buffer) : []
    const photo_mimetypes = req.files ? req.files.map(f => f.mimetype) : []

    const result = await pool.query(
      `INSERT INTO submissions
       (item_type, brand, model, condition, box_papers, description,
        photos, photo_mimetypes, photo_count, name, email, phone, contact_preference, source)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
       RETURNING *`,
      [item_type, brand, model, condition, box_papers, description,
       photos, photo_mimetypes, photos.length, name, email, phone, contact_preference, source]
    )

    const submission = result.rows[0]

    // Send email notification (don't block response on failure)
    sendSubmissionNotification(submission, req.files || []).catch(console.error)

    res.status(201).json({
      success: true,
      submission_id: submission.id,
      created_at: submission.created_at
    })

  } catch (error) {
    console.error('Submission error:', error)
    res.status(500).json({ success: false, error: 'Failed to create submission' })
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

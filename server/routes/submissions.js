import express from 'express'
import pool from '../db/index.js'

const router = express.Router()

// Placeholder route - implement as needed
router.get('/', async (req, res) => {
  res.json({ message: 'Submissions endpoint' })
})

export default router

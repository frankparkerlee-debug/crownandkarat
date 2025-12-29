import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import submissionsRouter from './routes/submissions.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || '*'
}))

// Parse JSON with 50mb limit for base64 images
app.use(express.json({ limit: '50mb' }))

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() })
})

// API Routes
app.use('/api/submissions', submissionsRouter)

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'public')))

// Handle React routing - serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ success: false, error: 'Something went wrong' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

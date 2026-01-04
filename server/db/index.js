import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

// Auto-migrate: create tables if they don't exist
const migrate = async () => {
  try {
    // Test connection
    const res = await pool.query('SELECT NOW()')
    console.log('Database connected:', res.rows[0].now)

    // Check if submissions table exists
    const tableCheck = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_name = 'submissions'
      )
    `)

    if (!tableCheck.rows[0].exists) {
      console.log('Creating submissions table...')

      await pool.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`)

      await pool.query(`
        CREATE TABLE submissions (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'reviewing', 'offered', 'accepted', 'declined', 'returned')),
          item_type VARCHAR(50) NOT NULL,
          brand VARCHAR(100),
          model VARCHAR(100),
          condition VARCHAR(50),
          box_papers VARCHAR(50),
          description TEXT,
          photos BYTEA[],
          photo_mimetypes TEXT[],
          photo_count INTEGER DEFAULT 0,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) NOT NULL,
          phone VARCHAR(30) NOT NULL,
          contact_preference VARCHAR(20),
          source VARCHAR(100),
          notes TEXT,
          offer_amount DECIMAL(10,2)
        )
      `)

      await pool.query(`CREATE INDEX idx_submissions_status ON submissions(status)`)
      await pool.query(`CREATE INDEX idx_submissions_created ON submissions(created_at DESC)`)

      console.log('Submissions table created successfully')
    } else {
      console.log('Submissions table already exists')
    }
  } catch (err) {
    console.error('Database migration failed:', err.message)
  }
}

// Run migration on startup
migrate()

export { pool }

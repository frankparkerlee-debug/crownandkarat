import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

// Test connection on startup
pool.query('SELECT NOW()')
  .then(res => console.log('Database connected:', res.rows[0].now))
  .catch(err => console.error('Database connection failed:', err.message))

export { pool }

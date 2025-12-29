CREATE EXTENSION IF NOT EXISTS "pgcrypto";

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
);

CREATE INDEX idx_submissions_status ON submissions(status);
CREATE INDEX idx_submissions_created ON submissions(created_at DESC);

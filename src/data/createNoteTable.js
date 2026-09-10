import pool from '../config/db.js';

const createNoteTable = async () => {
  const queryText = `
  CREATE TABLE IF NOT EXISTS notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
)
  `;

  try {
    pool.query(queryText);
    console.log('Note table created if not exists');
  } catch (error) {
    console.log('Error creating users table: ', error);
  }
};

export default createNoteTable;

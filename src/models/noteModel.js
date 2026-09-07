import pool from '../config/db';

export const getAllNotesService = async () => {
  const result = await pool.query('SELECT * FROM notes');
  return result.rows;
};
export const getNoteByIdService = async (id) => {
  const result = await pool.query('SELECT * FROM users where id = $1', [id]);
  return result.rows[0];
};
export const createNoteService = async (title, content) => {
  const result = await pool.query(
    'INSERT INTO users (title, name) VALUES ($1, $2) RETURNING *',
    [title, content],
  );
  return result.rows[0];
};
export const updateNoteService = async (id, title, content) => {
  const result = await pool.query(
    'UPDATE users SET title=$1, content=$2 WHERE id=$3 RETURNING *',
    [title, content, id],
  );
  return result.rows[0];
};
export const deleteNoteService = async (id) => {
  const result = await pool.query(
    'DELETE FROM users WHERE id=$1 REUTURNING *',
    [id],
  );
  return result.rows[0];
};

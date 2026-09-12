import pool from '../config/db.js';

export const getAllNotesService = async () => {
  const result = await pool.query('SELECT * FROM notes');
  return result.rows;
};
export const getNoteByIdService = async (id) => {
  const result = await pool.query('SELECT * FROM notes where id = $1', [id]);
  return result.rows[0];
};
export const createNoteService = async (title, content) => {
  const result = await pool.query(
    'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
    [title, content],
  );
  return result.rows[0];
};
export const updateNoteService = async (id, title, content) => {
  const result = await pool.query(
    'UPDATE notes SET title=$1, content=$2 WHERE id=$3 RETURNING *',
    [title, content, id],
  );
  return result.rows[0];
};
export const deleteNoteService = async (id) => {
  const result = await pool.query('DELETE FROM notes WHERE id=$1 RETURNING *', [
    id,
  ]);
  return result.rows[0];
};

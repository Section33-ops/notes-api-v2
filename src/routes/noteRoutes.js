import express from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controller/noteController.js';

const router = express.Router();

router.post('/notes', createNote);
router.get('/notes', getAllNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', updateNote);
router.delete('/note/:id', deleteNote);

export default router;

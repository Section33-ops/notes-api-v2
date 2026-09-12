import express from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controller/noteController.js';
import validateNote from '../middlewares/inputValidator.js';

const router = express.Router();

router.post('/notes', validateNote, createNote);
router.get('/notes', getAllNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', validateNote, updateNote);
router.delete('/notes/:id', deleteNote);

export default router;

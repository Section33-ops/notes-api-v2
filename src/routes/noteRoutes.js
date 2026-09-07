import express from 'express';

const router = express.Router();

router.post('/notes', createNotes);
router.get('/notes', getAllNotes);
router.get('/notes:id', getNoteById);
router.put('/notes/:id', UpdateNote);
router.delete('/note/:id', deleteNote);

export default router;

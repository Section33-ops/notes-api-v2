import {
  createNoteService,
  deleteNoteService,
  getAllNotesService,
  getNoteByIdService,
  updateNoteService,
} from '../models/noteModel.js';

const handleResponse = (res, status, message, data) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createNote = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const newNote = await createNoteService(title, content);
    handleResponse(res, 201, 'Note created successfully', newNote);
  } catch (err) {
    next(err);
  }
};

export const getAllNotes = async (req, res, next) => {
  try {
    const notes = await getAllNotesService();
    handleResponse(res, 200, 'Note fetched successfully', notes);
  } catch (err) {
    next(err);
  }
};

export const getNoteById = async (req, res, next) => {
  try {
    const note = await getNoteByIdService(req.params.id);
    if (!note) return handleResponse(res, 404, 'Note not found');
    handleResponse(res, 200, 'Note fetched successfully', note);
  } catch (err) {
    next(err);
  }
};

export const updateNote = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const updatedNote = await updateNoteService(req.params.id, title, content);
    if (!updatedNote) return handleResponse(res, 404, 'Note not found');
    handleResponse(res, 200, 'Note updated successfully', updatedNote);
  } catch (err) {
    next(err);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const deletedNote = await deleteNoteService(req.params.id);
    if (!deletedNote) return handleResponse(res, 404, 'Note not found');
    handleResponse(res, 200, 'Note deleted successfully', deletedNote);
  } catch (err) {
    next(err);
  }
};

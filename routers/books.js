const express = require('express');
const { addBook, getBookById, getAllBooks, deleteBookById, updateBookById } = require('../controllers/book');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', auth, addBook);
router.put('/books/:id', auth, updateBookById);
router.delete('/books/:id', auth, deleteBookById);

module.exports = router;
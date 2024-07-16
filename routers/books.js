const express = require('express');
const { addBook, getBookById, getAllBooks } = require('../controllers/book');

const router = express.Router();

router.post('/books', addBook);
router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);

module.exports = router;
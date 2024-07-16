const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
    },
}, {
    timestamps: true
})

const Book = mongoose.model('Book', schema);

module.exports = Book;
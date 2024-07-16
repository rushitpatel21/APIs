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

const Book = mongoose.model('book', schema);

module.exports = Book;
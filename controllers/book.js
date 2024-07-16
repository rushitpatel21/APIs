const Book = require('../models/book');

exports.addBook = async (req, res) => {
    try {

        const {
            name,
            price
        } = req.body;

        const data = await Book.create({
            name,
            price
        })

        res.status(200).send({
            error: false,
            data
        })

    } catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        })
    }
}

exports.getAllBooks = async (req, res) => {
    try {

        const data = await Book.find();

        res.status(200).send({
            error: false,
            data
        })

    } catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        })
    }
}

exports.getBookById = async (req, res) => {
    try {

        const {
            id
        } = req.params;

        const data = await Book.findById(id);

        res.status(200).send({
            error: false,
            data
        })

    } catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        })
    }
}

exports.updateBookById = async (req, res) => {
    try {

        const {
            id
        } = req.params;

        const data = await Book.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).send({
            error: false,
            data
        })

    } catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        })
    }
}

exports.deleteBookById = async (req, res) => {
    try {

        const {
            id
        } = req.params;

        const data = await Book.findByIdAndDelete(id);

        res.status(200).send({
            error: false,
            data
        })

    } catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        })
    }
}
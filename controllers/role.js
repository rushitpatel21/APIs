const Role = require('../models/role');

exports.addRole = async (req, res) => {
    try {

        const {
            name,
            role
        } = req.body;

        const data = await Role.create({
            name,
            role
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

exports.getAllRoles = async (req, res) => {
    try {
        const data = await Role.find();

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
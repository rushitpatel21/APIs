const Role = require('../models/role');

exports.auth = async (req, res, next) => {
    try {

        const authHeader = req.headers['authorization'];
        
        const user = await Role.findById(authHeader);

        if (user?.role == 'A') {
            next();
        }
        else {
            res.status(500).send({
                error: true,
                message: 'Only admin use this API.'
            })
        }
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        })
    }
}
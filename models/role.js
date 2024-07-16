const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        enum: ['A', 'C']
    },
}, {
    timestamps: true
});

const Role = mongoose.model('role', schema);

module.exports = Role;
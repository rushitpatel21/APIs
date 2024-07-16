const mongoose = require('mongoose');
require('dotenv').config();

exports.connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected.');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
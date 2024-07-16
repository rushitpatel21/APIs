const express = require('express');
const { connectDB } = require('./db/db');
const app = express();
const PORT = 5000;

app.use(express.json());
connectDB();

app.use('/api/book', require('./routers/books'));
app.use('/api/role', require('./routers/roles'));

app.listen(PORT, () => {
    console.log(`App run on port: ${PORT}`);
})
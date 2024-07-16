const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api/book', require('./routers/books'));

app.listen(PORT, () => {
    console.log(`App run on port: ${PORT}`);
})
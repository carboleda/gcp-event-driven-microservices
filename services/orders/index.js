'use strict'
const PORT = parseInt(process.env.PORT || 3000);
const express = require('express');
const app = express();
const { orders } = require('./routes');

app.use(express.json());
app.use('/orders', orders);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
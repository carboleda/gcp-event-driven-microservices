'use strict'
const PORT = parseInt(process.env.PORT || 3000);
const app = require('express')();
const { orders } = require('./routes');

app.use('/orders', orders);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
'use strict'
const PORT = parseInt(process.env.PORT || 3000);
const app = require('express')();
const bodyParse = require('body-parser');
const { orders } = require('./routes');

app.use(bodyParse.json());
app.use('/orders', orders);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
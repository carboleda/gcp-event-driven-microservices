'use strict'

const { Router } = require("express");
const router = Router();
const orders = require('../src/orders');
const payment = require('../src/payment');
const delivery = require('../src/delivery');

router.post('/', async (req, res) => {
    const orderId = await orders.createOrder(req.body);
    await payment.makePaymenent(orderId);
    await delivery.scheduleDelivery(orderId);
    res.status(201).send({ orderId });
});

module.exports = router;
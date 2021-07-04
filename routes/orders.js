'use strict'

const { Router } = require("express");
const router = Router();
const orders = require('../src/orders');
const inventory = require('../src/inventory');
const delivery = require('../src/delivery');

router.post('/', async (req, res) => {
    const orderId = await orders.createOrder(req.body);
    await Promise.all([
        await inventory.updateInventory(orderId),
        await delivery.scheduleDelivery(orderId)
    ])
    res.status(201).send({ orderId });
});

module.exports = router;
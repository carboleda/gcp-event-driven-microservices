'use strict'

const { Router } = require("express");
const {PubSub} = require('@google-cloud/pubsub');
const router = Router();
const orders = require('../src/orders');
const TOPIC_NAME = 'order-placed';
const pubSubClient = new PubSub();

router.post('/', async (req, res) => {
    const orderId = await orders.createOrder(req.body);
    notifyOrderPlaced(orderId);
    res.status(201).send({ orderId });
});

async function notifyOrderPlaced(orderId) {
    const data = { orderId };
    const dataBuffer = Buffer.from(JSON.stringify(data));
    await pubSubClient.topic(TOPIC_NAME).publish(dataBuffer);
    console.log(`Notifying ${TOPIC_NAME}`, data);
    return true;
}

module.exports = router;
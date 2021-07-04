'use strict'

const createOrder = async (order) => {
    console.log('Order', order);
    return Math.round(Math.random() * 100000);
}

module.exports = {
    createOrder
}
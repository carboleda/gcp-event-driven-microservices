/**
 * Background Cloud Function to be triggered by Pub/Sub.
 * This function is exported by index.js, and executed when
 * the trigger topic receives a message.
 *
 * @param {object} message The Pub/Sub message.
 * @param {object} context The event metadata.
 */
exports.scheduleDelivery = (message, context) => {
    const data = JSON.parse(Buffer.from(message.data, 'base64').toString());
    const { orderId } = data;

    console.log(`ScheduleDelivery Order Id: ${orderId}`);
}
const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    node: String,
});

module.exports = { OrdersSchema };
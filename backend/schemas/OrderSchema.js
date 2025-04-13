const { schema } = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    price: NUmber,
    percent: Number,
    isDown: String ,
});

module.exports = { OrderSchema };
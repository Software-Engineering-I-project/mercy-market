const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const SalesSchema = new mongoose.Schema({
    sku: { type: Number, required: true },
    last_7d: { type: Number, required: true },
    last_14d: { type: Number, required: true },
    last_30d: { type: Number, required: true },
    last_3m: { type: Number, required: true },
    last_6m: { type: Number, required: true },
    last_12m: { type: Number, required: true },
});

module.exports = mongoose.model("Sales", SalesSchema);

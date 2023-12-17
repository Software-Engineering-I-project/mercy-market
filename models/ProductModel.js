const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const ProductSchema = new mongoose.Schema({
    sku: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    department: { type: String, required: true },
    items_in_case: { type: Number, required: true },
    status: { type: String, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);

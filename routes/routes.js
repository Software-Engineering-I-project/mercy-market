const express = require("express");
const ProductModel = require("../models/ProductModel");
const DeliveryModel = require("../models/DeliveryModel");
const SalesModel = require("../models/SalesModel");
router = express.Router();

express.static("../public");

findProducts = async function (req, res) {
    try {
        const products = await ProductModel.find({});
        res.status(200).render("catalog", { products });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

getSpecificProduct = async function (req, res) {
    try {
        const delivery = await DeliveryModel.findOne({ sku: req.params.sku });
        const sales = await SalesModel.findOne({ sku: req.params.sku });
        res.render("item_details", { delivery, sales });
    } catch (error) {
        res.status(500).json({ msg: error });
        console.log(error);
    }
};

router.route("/catalog").get(findProducts);
router.route("/catalog/:sku").get(getSpecificProduct);

module.exports = router;

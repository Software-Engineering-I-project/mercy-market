const express = require("express");
const ProductModel = require("../models/ProductModel");
const DeliveryModel = require("../models/DeliveryModel");
const SalesModel = require("../models/SalesModel");
router = express.Router();

express.static("../public");

displayIndex = async function (req, res) {
    try {
        // Allows for redirecting to specific portion of the index page from other pages

        const fragment = req.query.fragment;
        const sections = ["home", "features", "products", "catalog", "reviews"];
        if (sections.includes(fragment)) {
            // console.log("Redirecting to:", `/index#${fragment}`); // debugging
            res.redirect(`/index#${fragment}`);
        } else {
            res.status(200).render("index");
        }
        // res.redirect(`/index#features`);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: error });
    }
};

displayFeature = async function (req, res) {
    try {
        const feature = req.params.feature;
        res.status(200).render(`features/${feature}`);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

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
        const product = await ProductModel.findOne({ sku: req.params.sku });
        const delivery = await DeliveryModel.findOne({ sku: req.params.sku });
        const sales = await SalesModel.findOne({ sku: req.params.sku });
        res.render("item_details", { delivery, sales, product });
    } catch (error) {
        res.status(500).json({ msg: error });
        console.log(error);
    }
};

router.route("/index").get(displayIndex);
router.route("/catalog").get(findProducts);
router.route("/catalog/:sku").get(getSpecificProduct);
router.route("/our_features/:feature").get(displayFeature);

// router.route("/index/:fragment").get((req, res) => {
//     const section = req.params.section;
//     res.render("index", { section });
// });

module.exports = router;

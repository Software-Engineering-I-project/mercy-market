const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect.js");
const mongoose = require("mongoose");
const ProductModel = require("./models/ProductModel.js");
const SalesModel = require("./models/SalesModel.js");
const DeliveryModel = require("./models/DeliveryModel.js");

const salesJsonData = require("./csv/sales.json");
const deliveryJsonData = require("./csv/delivery.json");

const router = require("./routes/routes.js");

const app = express();
const PORT = 3000;
MONGO_URI = "mongodb+srv://izsoum2024:PXHvGWLP3t2Mbpwk@cluster0.vif5tt3.mongodb.net/?retryWrites=true&w=majority";

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connect to MongoDB (replace with your actual MongoDB URI)
connectDB(MONGO_URI, "MarketLookUpCo");

// Create a User model

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", async function (req, res) {
//     try {
//         products = findProducts

//         console.log(products);
//         console.log(typeof products);
//     } catch (err) {
//         console.error(err);
//     }
// });

// Routes

app.use(router);

// app.post("/register", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Create a new user in the database
//         const user = new User({ email, password });
//         await user.save();

//         res.send("Account created successfully");
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

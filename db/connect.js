const mongoose = require("mongoose");

const connectDB = function (uri, db) {
    if (!uri) {
        console.error("Database URI is missing.");
        return;
    }

    return mongoose
        .connect(uri, { dbName: db })
        .then(() => {
            console.log("Connected to the database.");
        })
        .catch((err) => {
            console.error("Error connecting to the database:", err);
            throw err; // Optional: Rethrow the error for further handling
        });
};

module.exports = connectDB;

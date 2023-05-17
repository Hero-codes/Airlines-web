require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const paymentRoutes = require("./routes/payment.js")
const userRouter = require("./routes/user.js");
const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error);
    };
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', userRouter);
app.use('/api/payment/', paymentRoutes);

app.listen(3000, () => {
    console.log("Server started");
    connectDB();
});
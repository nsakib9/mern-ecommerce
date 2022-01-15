require("dotenv").config();
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongo db connection successful")
    } catch (error) {
        console.error("Connection Error by mongodb")
        process.exit(1)
    }
}

module.exports = connectDB
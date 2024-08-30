const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
dotenv.config();
// ports and connectionUrl 

const PORT = process.env.PORT ;
const CONNECTION_URL = process.env.MONGODB_CONNECTION;

// database connection
const connectDb = async () => {
    try {
      await mongoose.connect(CONNECTION_URL);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  };
app.use(cookieParser());
app.use(express.json());
app.use(cors());
connectDb().then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
  });


// routes

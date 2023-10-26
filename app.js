// fawYnMg2p66QAHQd
// mongodb+srv://afedayo:<password>@cluster0.kqfjdqx.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp

//require the dotenv package and configures it immediately
require("dotenv").config();

//import express
const express = require("express");

//import mongoose
const mongoose = require("mongoose");

//spins up a new express application
const app = express();

//uses port from the env..
const port = process.env.PORT || 3000;

//import routes to app.js from authRouter
const authRouter = require("./routes/authRouter");

// import movieRouters from routes folder
const movieRouter = require("./routes/movieRouter");

// imports cors
const cors = require("cors");

// import bookmarkRouter from routes folder
const bookmarkRouter = require("./routes/bookmarkRouter");

//import the error from error file
const error = require("./middlewares/error");

// invoke cors this has to be above the order middleware
// allows request from client side to go through
app.use(
  cors({
    origin: ["http://localhost:5174"],
  })
);

app.use(cors());

//a middleware that allows access to the req.body on all requests (req.body would be undefined without this)
app.use(express.json());

//middleware for  login and register authentication router
app.use("/api/auth", authRouter);

//middleware for movies router
app.use("/api/movie", movieRouter);

// middleware for bookmark router
app.use("/api/bookmark", bookmarkRouter);

//middleware for error
app.use(error);

//starts listening on a given port and runs the callback function when it does

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
    app.listen(port, () => {
      console.log(`Server is listening on PORT: ${port}`);
    });
  } catch (err) {
    // console.log(err);
    console.log("Unable to Connect");
  }
};

start();

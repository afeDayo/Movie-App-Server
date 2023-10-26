require("dotenv").config();

const mongoose = require("mongoose");

const Movie = require("./models/movies");

const movieJson = require("./movies.json");

const start = async () => {
  try {
    // connect to database
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
    console.log("Deleting...");
    // deletes the previous movies in the dp
    await Movie.deleteMany();
    console.log("Previous once deleted");
    console.log("Uploading...");
    // uploads the movies from the movies.json
    await Movie.create(movieJson);

    console.log("Movie Uploaded Successfully");
    // breaks the terminal when it is done
    process.exit(0);
  } catch (error) {
    console.log(error);
    console.log("Unable to connect");
    process.exit(1);
  }
};

start();

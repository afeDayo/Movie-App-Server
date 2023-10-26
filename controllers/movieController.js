const Movie = require("../models/movies");

const allData = async (req, res) => {
  const data = await Movie.find({});

  res.status(200).json({
    data: data,
  });
};

const allSeries = async (req, res) => {
  const series = await Movie.find({ type: "series" });

  res.status(200).json({
    data: series,
  });
};

const allMovies = async (req, res) => {
  const movies = await Movie.find({ type: "movie" });

  res.status(200).json({
    data: movies,
  });
};

module.exports = { allData, allSeries, allMovies };

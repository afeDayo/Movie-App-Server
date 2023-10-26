const express = require("express");

const methodNotAllowed = require("../utils/methodNotAllowed");
const {
  allData,
  allSeries,
  allMovies,
} = require("../controllers/movieController");

const router = express.Router();

router.route("/").get(allData).all(methodNotAllowed);
router.route("/series").get(allSeries).all(methodNotAllowed);
router.route("/movies").get(allMovies).all(methodNotAllowed);

module.exports = router;

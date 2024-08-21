const express = require("express");
const router = express.Router();
const pokemonRoutes= require("./pokemonRoutes");
const trainerRoutes= require("./trainerRoutes");
const citiesRoutes= require("./citiesRoutes")

router.get("/", (req, res) => {
    res
    .status(200)
    .json({ success: true, message: `${req.method} - Request Made` });
});

router.use("/pokemon", pokemonRoutes);
router.use("/trainers", trainerRoutes)
router.use("/cities", citiesRoutes)

module.exports = router;
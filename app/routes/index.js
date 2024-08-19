const express = require("express");
const router = express.Router();
const pokemonRoutes= require("./pokemonRoutes");

router.get("/", (req, res) => {
    res
    .status(200)
    .json({ success: true, message: `${req.method} - Request Made` });
});

router.use("/pokemon", pokemonRoutes);

module.exports = router;
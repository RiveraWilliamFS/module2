const router = require("express").Router();
const {
    createCities,
    getAllCities,
    getCitiesById,
    updateCities,
    deleteCities
} = require("../controller/citiesController");

router.get("/", getAllCities);

router.get("/:id", getCitiesById);

router.post("/", createCities);

router.put("/:id", updateCities);

router.delete("/:id", deleteCities);

module.exports = router;
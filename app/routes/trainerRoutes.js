const router = require("express").Router();
const {
    createTrainer,
    getAllTrainer,
    getTrainerById,
    updateTrainer ,
    deleteTrainer
} = require("../controller/trainerController");

router.get("/", getAllTrainer);

router.get("/:id", getTrainerById);

router.post("/", createTrainer);

router.put("/:id", updateTrainer);

router.delete("/:id", deleteTrainer);

module.exports = router;
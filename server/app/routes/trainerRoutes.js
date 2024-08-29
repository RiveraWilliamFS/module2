const router = require("express").Router();
const {
    createTrainer,
    getAllTrainers,
    getTrainerById,
    updateTrainer ,
    deleteTrainer
} = require("../controller/trainerController");

router.get("/", getAllTrainers);

router.get("/:id", getTrainerById);

router.post("/", createTrainer);

router.put("/:id", updateTrainer);

router.delete("/:id", deleteTrainer);

module.exports = router;
const Trainer = require("../models/Trainer");
const Pokemon = require("../models/Pokemon");


const getAllTrainers = async (req, res) => {
    try {
        const trainer = await Trainer.find({});
        res.status(200).json({ 
            data: trainer,
            success: true, 
            message: `${req.method} - request to Trainer endpoint`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

const getTrainerById = async (req, res) => {
    const { id } = req.params;
    try { 
        const trainer = await Trainer.findById(id);
        if (!trainer) {
            return res.status(404).json({ 
                success: false, 
                message: "Trainer not found",
            });
        }
        res.status(200).json({ 
            data: trainer,
            success: true, 
            message: `${req.method} - request to Trainer endpoint`,
        });
    } catch (error) {
        console.error(error);
        if (error.name === "ValidationError") {
            res.status(422).json(error); 
        } else {
            res.status(500).json(error);
        }
    }
};

const createTrainer = async (req, res) => {
    const { trainer } = req.body;
    console.log("trainer", trainer)
    try { 
        const newTrainer = await Trainer.create(trainer);
        res.status(201).json({ 
            data: newTrainer,
            success: true, 
            message: `${req.method} - request to Trainer endpoint`,
        });
    } catch (error) {
        console.error(error);
        if (error.name === "ValidationError") {
            res.status(422).json(error); 
        } else {
            res.status(500).json(error);
        }
    }
};

const updateTrainer = async (req, res) => {
    const { id } = req.params;
    try { 
        const trainer = await Trainer.findByIdAndUpdate(id, req.body, { new: true });
        if (!trainer) {
            return res.status(404).json({ 
                success: false, 
                message: "Trainer not found",
            });
        }
        res.status(200).json({ 
            data: trainer,
            success: true, 
            message: `${req.method} - request to Trainer endpoint`,
        });
    } catch (error) {
        console.error(error);
        if (error.name === "ValidationError") {
            res.status(422).json(error); 
        } else {
            res.status(500).json(error);
        }
    }
};

const deleteTrainer = async (req, res) => {
    const { id } = req.params;
    try { 
        const trainer = await Trainer.findByIdAndDelete(id);
        if (!trainer) {
            return res.status(404).json({ 
                success: false, 
                message: "Trainer not found",
            });
        }
        res.status(200).json({ 
            data: trainer,
            success: true, 
            message: `${req.method} - request to Trainer endpoint`,
        });
    } catch (error) {
        console.error(error);
        if (error.name === "ValidationError") {
            res.status(422).json(error); 
        } else {
            res.status(500).json(error);
        }
    }
};

module.exports = { 
    createTrainer,
    getAllTrainers,
    getTrainerById, 
    updateTrainer, 
    deleteTrainer
};

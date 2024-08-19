const Trainer = require("../models/Trainer")

const getAllTrainer = async (req, res) => {
    const trainer = await Trainer.find({})
    res.status(200).json({ 
        data: trainer,
        success: true, 
        message: `${req.method} - request to Trainer endpoint`,
    });
};

const getTrainerById = async (req, res) => {
    const { id } = req.params;
    const trainer = await Trainer.findById(id)
    res.status(200).json({ 
        trainer,
        success: true, 
        message: `${req.method} - request to Trainer endpoint`,
    });
};

const createTrainer = async (req, res) => {
    const { trainer } = req.body;
    console.log("createTrainer", trainer)
try { 
    const newTrainer = await Trainer.create(trainer);
    console.log("data >>>", newTrainer);
    res.status(200).json({ 
        success: true, 
        message: `${req.method} - request to Trainer endpoint`,
    });
 } catch (error) {
    console.log(error);
    if (errorname === "ValidationError") {
        console.error("Error Validating!", error);
        res.status(422).json(error); 
    } else {
        console.error(error);
        res.status(500).json(error);
    }
 }
};

const updateTrainer = async (req, res) => {
    const { id } = req.params;
    const Trainer = await Trainer.findByIdAndUpdate(id, req.body, { new: true }); 
    res.status(200).json({ 
        data: trainer,
        success: true, 
        message: `${req.method} - request to Trainer endpoint`,
    });
};

const deleteTrainer = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ 
        id,
        success: true, 
        message: `${req.method} - request to Trainer endpoint`,
    });
};


module.exports = { 
    createTrainer,
    getAllTrainer,
    getTrainerById, 
    updateTrainer, 
    deleteTrainer
};   
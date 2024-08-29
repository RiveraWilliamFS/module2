const Cities = require("../models/Cities");

const getAllCities = async (req, res) => {
    try {
        const cities = await Cities.find({});
        res.status(200).json({ 
            data: cities,
            success: true, 
            message: `${req.method} - request to Cities endpoint`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

const getCitiesById = async (req, res) => {
    const { id } = req.params;
    try { 
        const cities = await Cities.findById(id);
        if (!cities) {
            return res.status(404).json({ 
                success: false, 
                message: "Cities not found",
            });
        }
        res.status(200).json({ 
            data: cities,
            success: true, 
            message: `${req.method} - request to Cities endpoint`,
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

const createCities = async (req, res) => {
    const { cities } = req.body;
    try { 
        const newCities = await Cities.create(cities);
        res.status(201).json({ 
            data: newCities,
            success: true, 
            message: `${req.method} - request to Cities endpoint`,
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

const updateCities = async (req, res) => {
    const { id } = req.params;
    try { 
        const cities = await Cities.findByIdAndUpdate(id, req.body, { new: true });
        if (!cities) {
            return res.status(404).json({ 
                success: false, 
                message: "Cities not found",
            });
        }
        res.status(200).json({ 
            data: cities,
            success: true, 
            message: `${req.method} - request to Cities endpoint`,
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

const deleteCities = async (req, res) => {
    const { id } = req.params;
    try { 
        const cities = await Cities.findByIdAndDelete(id);
        if (!cities) {
            return res.status(404).json({ 
                success: false, 
                message: "Cities not found",
            });
        }
        res.status(200).json({ 
            data: cities,
            success: true, 
            message: `${req.method} - request to Cities endpoint`,
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
    createCities,
    getAllCities,
    getCitiesById, 
    updateCities, 
    deleteCities
};

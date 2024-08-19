const Pokemon = require("../models/Pokemon");

const getAllPokemon = async (req, res) => {
    try {
        const pokemons = await Pokemon.find({});
        res.status(200).json({ 
            data: pokemons,
            success: true, 
            message: `${req.method} - request to Pokemon endpoint`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

const getPokemonById = async (req, res) => {
    const { id } = req.params;
    try { 
        const pokemon = await Pokemon.findById(id);
        if (!pokemon) {
            return res.status(404).json({ 
                success: false, 
                message: "Pokemon not found",
            });
        }
        res.status(200).json({ 
            data: pokemon,
            success: true, 
            message: `${req.method} - request to Pokemon endpoint`,
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

const createPokemon = async (req, res) => {
    const { pokemon } = req.body;
    try { 
        const newPokemon = await Pokemon.create(pokemon);
        res.status(201).json({ 
            data: newPokemon,
            success: true, 
            message: `${req.method} - request to Pokemon endpoint`,
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

const updatePokemon = async (req, res) => {
    const { id } = req.params;
    try { 
        const pokemon = await Pokemon.findByIdAndUpdate(id, req.body, { new: true });
        if (!pokemon) {
            return res.status(404).json({ 
                success: false, 
                message: "Pokemon not found",
            });
        }
        res.status(200).json({ 
            data: pokemon,
            success: true, 
            message: `${req.method} - request to Pokemon endpoint`,
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

const deletePokemon = async (req, res) => {
    const { id } = req.params;
    try { 
        const pokemon = await Pokemon.findByIdAndDelete(id);
        if (!pokemon) {
            return res.status(404).json({ 
                success: false, 
                message: "Pokemon not found",
            });
        }
        res.status(200).json({ 
            data: pokemon,
            success: true, 
            message: `${req.method} - request to Pokemon endpoint`,
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
    createPokemon,
    getAllPokemon,
    getPokemonById, 
    updatePokemon, 
    deletePokemon
};

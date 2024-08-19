const Pokemon = require("../models/Pokemon")

const getAllPokemon = async (req, res) => {
    const pokemons = await Pokemon.find({})
    res.status(200).json({ 
        data: pokemons,
        success: true, 
        message: `${req.method} - request to Pokemon endpoint`,
    });
};

const getPokemonById = async (req, res) => {
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id)
    res.status(200).json({ 
        pokemon,
        success: true, 
        message: `${req.method} - request to Pokemon endpoint`,
    });
};

const createPokemon = async (req, res) => {
    const { pokemon } = req.body;
    console.log("createPokemon", pokemon)
try { 
    const newPokemon = await Pokemon.create(pokemon);
    console.log("data >>>", newPokemon);
    res.status(200).json({ 
        success: true, 
        message: `${req.method} - request to Pokemon endpoint`,
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

const updatePokemon = async (req, res) => {
    const { id } = req.params;
    const Pokemon = await Pokemon.findByIdAndUpdate(id, req.body, { new: true }); 
    res.status(200).json({ 
        data: pokemon,
        success: true, 
        message: `${req.method} - request to Pokemon endpoint`,
    });
};

const deletePokemon = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ 
        id,
        success: true, 
        message: `${req.method} - request to Pokemon endpoint`,
    });
};


module.exports = { 
    createPokemon,
    getAllPokemon,
    getPokemonById, 
    updatePokemon, 
    deletePokemon
};   

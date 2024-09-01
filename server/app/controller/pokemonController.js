const Pokemon = require("../models/Pokemon");
const Trainer = require("../models/Trainer")


 const getAllPokemon = async (req, res) => {

    let query = Pokemon.find({}); 

    if (req.query.select) {
        const fields = req.query.select.split(',').join(' ');
        console.log('Fields to select:', fields); 
        query = query.select(fields);
    }

    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        console.log('Sort by:', sortBy); 
        query = query.sort(sortBy);
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * limit;

    console.log('Page:', page);
    console.log('Limit:', limit);
    console.log('Skip:', skip);

    query.skip(skip).limit(limit);
    console.log('Query after skip and limit:', query); 

    const pokemon = await query;
    res.status(200).json({
        data: pokemon,
        success: true,
        message: 'Successfully fetched Pokemon',
    });
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
  try{  
    const { pokemon } = req.body;
    const user = await Trainer.findById(pokemon.trainer);
    pokemon.trainer = user; 
    const pokemonData = new Pokemon(pokemon);
    user.pokemon.push(pokemonData._id);
    const queries = [pokemonData.save(), user.save()];
    await Promise.all(queries);

    res.status(200).json({
        data: pokemonData,
        success: true,
        message: `${req.method} - Pokemon request made`,
    });
    } catch ({ message }) {
        res.status(500).json({
            success: false,
            message,
        });
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

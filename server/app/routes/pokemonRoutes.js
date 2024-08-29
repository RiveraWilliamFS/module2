const router = require("express").Router();
const {
    createPokemon,
    getAllPokemon,
    getPokemonById,
    updatePokemon ,
    deletePokemon
} = require("../controller/pokemonController");

router.get("/", getAllPokemon);

router.get("/:id", getPokemonById);

router.post("/", createPokemon);

router.put("/:id", updatePokemon);

router.delete("/:id", deletePokemon);

module.exports = router;



import axios from "axios";

const API = {};

API.fetchPokemon = async () => {
    const response = await axios.get("http:localhost:3002/api/v1/pokemon");
    console.log('>>>', response);
};

export default API;

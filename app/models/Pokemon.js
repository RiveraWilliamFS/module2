const mongoose = require("mongoose");

const pokemonsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You are required to have an Pokemon"],
        unique: [true, "You can only have one Pokemon of that name"],
        trim: true,
        maxlength: [50, 'Your name is too long'],
    },
    age: {
        type: Number,  
        required: true,
    },
    email: {
        type: String,
        match: [
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            "Please enter a valid email address"
        ],
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description cannot be more than 500 characters"],
    }, 

    genre: {
        type: [String], 
        required: true, 
        enum:[
            "Fire",
            "Water",
            "Grass",
            "Earth",
            "Electric",
            "Other",
        ],
    }
}, 
{ timestamps: true });

module.exports = mongoose.model("Pokemon", pokemonsSchema);


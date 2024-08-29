const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You are required to have an Cities"],
        unique: [true, "You can only have one City of that name"],
        trim: true,
        maxlength: [50, 'Your name is too long'],
    },
    population: {
        type: Number,  
        required: true,
    },
    food: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description cannot be more than 500 characters"],
    }, 

    genre: {
        type: [String], 
        required: true, 
        enum:[
            "population",
            "size",
            "types",
            "food",
            "hotels",
            "Other",
        ],
    }
}, 
{ timestamps: true });

module.exports = mongoose.model("Cities", citiesSchema);
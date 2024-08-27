const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema (
    {
        name: {
                type: String,
                required: [true, "You are required to have an Trainer"],
                unique: [true, "You can only have one Trainer of that name"],
                trim: true,
                maxlength: [50, 'Your name is too long'],
            },

        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: [50, "Name cannot be more than 50 characters"],
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
     },
     averageRating: {
        type: Number,
        min: [1, "Rating must be at least 1"],
        max: [10, "Rating cannot be more than 10"]
     },

     pokemon: [
     {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pokemon"
    },
     ],
    }, 
    { timestamps: true }
    );

    module.exports = mongoose.model("Trainer", trainerSchema)


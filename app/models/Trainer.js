const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema (
    {
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
     trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trainer",
     },
    }, 
    { timestamps: true }
    );

    module.exports = mongoose.model("Trainer", trainerSchema)


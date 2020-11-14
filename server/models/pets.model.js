const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required."],
        minlength: [3, "Name must be at least 3 characters."],
        unique: [true, "Name must be unquie."]
    },
    type: {
        type: String,
        required: [true, "Type required."],
        minlength: [3, "Type must be at least 3 characters."]
    },
    description: {
        type: String,
        required: [true, "Description required."],
        minlength: [3, "Type must be at least 3 characters."]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
},
    {timestamps:true})

const Pet = mongoose.model("Pet",PetSchema);

module.exports = Pet;
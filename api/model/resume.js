const mongoose = require("mongoose");

const resume = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    address: {
        type: Array,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    workExperience: {
        type: Array,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    proSkills: {
        type: Array,
        required: true
    },
    personalSkills: {
        type: Array,
        required: true
    },
    hobbies: {
        type:String,
        required: true
    },
    followme: {
        type: Array,
        required: true
    }
});

const Resume = mongoose.model("Resume", resume);

module.exports = Resume;
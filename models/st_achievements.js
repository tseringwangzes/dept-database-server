const mongoose = require("mongoose");

const stachieve = new mongoose.Schema({
    faculty_name:String,
    student_name:String,
    achievements: String,
    year: String,
    date: String,
    shared_with: String,
    status: String,
    
},
    {
        collection: "stachievements",
    }
);

const stachievements = mongoose.model("stachievements", stachieve);
module.exports = stachievements;
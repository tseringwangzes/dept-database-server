const mongoose = require("mongoose");

const stpublica = new mongoose.Schema({
    faculty_name:String,
    student_name:String,
    topic: String,
    year: String,
    date: String,
    collaboration: String,
    no_of_students: String,
    status: String,
    
},
    {
        collection: "stpublication",
    }
);

const stpublication = mongoose.model("stpublication", stpublica);
module.exports = stpublication;
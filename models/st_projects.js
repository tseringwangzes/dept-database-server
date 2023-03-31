const mongoose = require("mongoose");

const stprojects = new mongoose.Schema({
    faculty_name:String,
    student_name:String,
    topic: String,
    year: String,
    date: String,
    granted_money: String,
    description: String,
    status: String,
    collaboration:String,
    
},
    {
        collection: "stprojects",
    }
);

const st_projects = mongoose.model("stprojects", stprojects);
module.exports = st_projects;
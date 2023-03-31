const mongoose = require("mongoose");

const st_award = new mongoose.Schema({
    st_name: String,
    award_name: String,
    year: String,
    date: String,
    shared_with: String,
    status: String,
    
},
    {
        collection: "student_award",
    }
);

const student_award = mongoose.model("student_award", st_award);
module.exports = student_award;
const mongoose = require("mongoose");

const ftschema = new mongoose.Schema({
    faculty_name:String,
    award_name: String,
    award_reason: String,
    year: String,
    date: String,
    shared_with: String,
    
},
    {
        collection: "ft_award",
    }
);

const ft_awards = mongoose.model("ft_award", ftschema);
module.exports = ft_awards;
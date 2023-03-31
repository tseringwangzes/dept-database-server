const mongoose = require("mongoose");

const ftforeign = new mongoose.Schema({
    faculty_name:String,
    topic: String,
    start_date: String,
    end_date: String,
    country: String,
    
},
    {
        collection: "ft_foreign",
    }
);

const ft_foreign = mongoose.model("ft_foreign", ftforeign);
module.exports = ft_foreign;
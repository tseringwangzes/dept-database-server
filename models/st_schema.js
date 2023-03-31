const mongoose = require("mongoose");

const st_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    }
   
});

//creating model
const profile = new mongoose.model("profile",st_schema);

module.exports = profile;
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const DB = process.env.DATABASE;

mongoose.connect(DB,{
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then (() => console.log("DB connected"))
.catch((error) =>{
  console.log("error",error);
})
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const bodyParser = require('body-parser');
const csv = require('csvtojson');
const router = require("./Routes/router");
const PORT = process.env.PORT || 4002;



// middleware
app.use(express.json());
app.use(cors());
app.use(router);
app.use(bodyParser.json());


app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})

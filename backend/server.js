require("dotenv").config();
const connection = require("./db");
const express = require('express');
const app = express();
const cors = require('cors');
const qrCodeRouter = require('./routes/qrcode');
const foreignerRouter = require('./routes/foreigner');

//database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api", qrCodeRouter);
app.use("/api/foreigner" , foreignerRouter);

const port = 5000;
app.listen(port,() =>{
    console.log('Server is running on port number 5000') 
})
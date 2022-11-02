const express = require('express');
const app = express();
const cors = require('cors');
const qrCodeRouter = require('./routes/qrcode');

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api",qrCodeRouter)

const port = 5000;
app.listen(port,() =>{
    console.log('Server is running on port number 5000') 
})
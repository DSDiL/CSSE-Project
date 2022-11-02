const express = require("express");
const qrRouter = express.Router();
const {scanQrCode} = require('../controller/qrcode');

qrRouter.post("/scanQrCode",scanQrCode)

module.exports = qrRouter;
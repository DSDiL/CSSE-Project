const express = require("express");
const Report = require('../models/reportModel');

const router = express.Router();

router.get('/map/:date', async (req, res) => {
    
    const date = req.params.date;

    await Report.find({'date':`${date}`}).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;
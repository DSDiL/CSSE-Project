const express = require("express");
const { default: mongoose } = require("mongoose");

const Report = require('../models/reportModel');
const Temp = require("../models/TempModel");

const router = express.Router();

// save timetable data temporary
router.post('/', async (req, res) => {
    
    const data = req.body;

    const temp = new Temp (data);
    
    await temp.save().then((result) => {
        if (result) {
            Temp.find({'date':`${data.date}`}).then((result) => {
                res.json(result);
            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            res.json('Error');
        }
    }).catch((err) => {
        console.log(err);
    })
});

// save timetable to database 
router.post('/add/:date', async (req, res) => {
    
    const date = req.params.date;
    const timetable = req.body;

    await Report.findOne({'date': `${date}`}).then((result) => {
        if (result) {
            res.json('Date already exists');
        }
        else {
            const timeTable = new Report ({
                date,
                timetable
            });

            timeTable.save().then((result) => {
            }).catch((err) => {
                console.log(err);
            })
        }
    })
});

// retrieve temporary stored timetable data
router.get('/:date', async (req, res) => {

    const date = req.params.date;

    Temp.find({'date':`${date}`}).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    })
});

//delete temporary stored timetable data
router.delete('/del/:id/:date', async (req, res) => {

    const id = req.params.id;
    const date = req.params.date;

    await Temp.findByIdAndDelete(id).then((result) => {
        if (result) {
            Temp.find({'date':`${date}`}).then((result) => {
                res.json(result);
            }).catch((err) => {
                console.log(err);
            })
        }
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;
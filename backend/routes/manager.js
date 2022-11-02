const express = require("express");
const Manager = require('../models/managerModel');
const Report = require('../models/reportModel');

const router = express.Router();

//retrieve timetable data
router.get('/table/:date', async (req, res) => {

    const date = req.params.date;

    console.log(date)

    Report.find({'date':`${date}`}).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    })
});

//add new data to timetable
router.put('/table/add/:date', async (req, res) => {
    
    const date = req.params.date;

    const {
        source,
        destination,
        departure,
        arrival,
        busno} = req.body;

    let id = mongoose.Types.ObjectId();
    const _id = id.toString();

    const timetable = {
        source,
        destination,
        departure,
        arrival,
        busno,
        _id 
    }

    await Report.updateOne({'date': `${date}`}, {$push: {timetable: `${timetable}`}}).then((result) => {
        
            if (result) {
                Report.find({'date':`${date}`}).then((result) => {
                    res.json(result);
                }).catch((err) => {
                    console.log(err);
                })
            }
    }).catch((err) => {
        console.log(err)
    })
})

//delete timetable data
router.put('/table/:did/:tid', async (req, res) => {
    
    const did = req.params.did;
    const tid = req.params.tid;

    await Report.updateOne({_id: `${did}`}, {$pull: {timetable: {_id: `${tid}`}}}).then((result) => {
       
        if (result) {
            Report.find({'_id':`${tid}`}).then((result) => {
                res.json(result);
            }).catch((err) => {
                console.log(err);
            })
        }
    }).catch((err) => {
        console.log(err)
    })
})

//update timetable data
router.put('/table/update', async (req, res) => {
    
    const {
        id,
        source,
        destination,
        departure,
        arrival,
        busno} = req.body;

    await Report.updateOne({'timetable._id': `${id}`}, {$set: {
        'timetable.$.source': `${source}`,
        'timetable.$.destination': `${destination}`,
        'timetable.$.departure': `${departure}`,
        'timetable.$.arrival': `${arrival}`,
        'timetable.$.busno': `${busno}`,}}).then((result) => {
        
            if (result) {
                Report.find({'_id':`${id}`}).then((result) => {
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
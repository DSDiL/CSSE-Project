const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReportSchema = new Schema ({

    date: {
        type: String,
        required: true
    },
    timetable: [{
        source: {
                type: String,
                required: true
            },
            destination: {
                type: String,
                required: true
            },
            departure: {
                type: String,
                required: true
            },
            arrival: {
                type: String,
                required: true
            },
            busno: {
                type: String,
                required: true
            },
            _id: {
                type: String,
                required: true
            }
    }]
            
})

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;
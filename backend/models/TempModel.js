const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TempSchema = new Schema ({
    date: {
        type: String,
        required: true
    },
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
    }
})

const Temp = mongoose.model('Temp', TempSchema);

module.exports = Temp;
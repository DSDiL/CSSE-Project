const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ForeignerSchema = new Schema ({

})

const Foreigner = mongoose.Model('Foreigner', ForeignerSchema);

module.exports = Foreigner;
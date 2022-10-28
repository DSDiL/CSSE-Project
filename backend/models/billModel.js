const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillSchema = new Schema ({

})

const Bills = mongoose.model('Bills', BillSchema);

module.exports = Bills;
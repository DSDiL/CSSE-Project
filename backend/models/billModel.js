const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillSchema = new Schema ({

})

const Bills = mongoose.Model('Bills', BillSchema);

module.exports = Bills;
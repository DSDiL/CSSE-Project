const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostpaidSchema = new Schema ({

})

const Postpaid = mongoose.Model('Postpaid', PostpaidSchema);

module.exports = Postpaid;
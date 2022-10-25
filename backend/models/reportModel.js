const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReportSchema = new Schema ({

})

const Report = mongoose.Model('Report', ReportSchema);

module.exports = Report;
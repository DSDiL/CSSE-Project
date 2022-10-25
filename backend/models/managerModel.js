const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ManagerSchema = new Schema ({

})

const Manager = mongoose.Model('Manager', ManagerSchema);

module.exports = Manager;
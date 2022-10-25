const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PackagesSchema = new Schema ({

})

const Packages = mongoose.Model('Packages', PackagesSchema);

module.exports = Packages;
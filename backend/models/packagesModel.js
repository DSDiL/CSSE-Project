const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PackagesSchema = new Schema ({

    id:{
        type:Number,
        require: true,
        unique:true
    },
    pName:{
        type:String,
        require:true
    },
    pDate:{
        type:String,
        require:true
    },
    pPrice:{
        type:Number,
        require:true
    }


})

const Packages = mongoose.model('Packages', PackagesSchema);

module.exports = Packages;
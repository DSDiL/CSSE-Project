const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrepaidSchema = new Schema ({

    name:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require:true
    },

    nic:{
        type: String,
        require:true
    },
    
    phoneNo:{
        type: Number,
        require:true
    },

    password:{
        type: String,
        require: true
    },


})

const Prepaid = mongoose.Model('Prepaid', PrepaidSchema);

module.exports = Prepaid;
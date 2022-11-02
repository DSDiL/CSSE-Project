const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const prepaidSchema = new Schema({

    name :{
        type: String, 
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    nic:{
        type:String,
        require:true,
        unique:true
    },
    mobile:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }

})

const PrepaidR = mongoose.model("Prepaid" , prepaidSchema);
module.exports = PrepaidR;
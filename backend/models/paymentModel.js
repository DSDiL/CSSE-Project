const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema ({
    packageId:{
        type:Number,
        require:true
    },
    paymentDate:{
        type:Date,
        require:true
    },
    nic:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    }

})

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema ({

})

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;
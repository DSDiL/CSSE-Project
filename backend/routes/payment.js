const express = require("express");
const Payment = require('../models/paymentModel');

const router = express.Router();

router.route("/add").post((req,res) => {
    const packageId = Number(req.body.packageId);
    const paymentDate = Date(req.body.paymentDate);
    const nic = req.body.nic;
    const price = Number(req.body.price);

    const newPayment = new Payment({
        packageId,paymentDate,nic,price
    })

    newPayment.save().then(() => {
        res.json("Payment Added")
    }).catch((err) => {
        console.log(err);
    })

})

router.route("/get/:nic").get(async (req,res) => {
    let nic =req.params.nic;
    const user = await Payment.findOne({nic})
    .then((payment) => {
        res.status(200).send({status:"user fetched",payment})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetched user",error: err.message});
    })
})


module.exports = router;
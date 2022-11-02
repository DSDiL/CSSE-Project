const router = require("express").Router();
let Prepaid = require("../models/prepaidModel");

router.route("/add").post((req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const nic = req.body.nic;
    const mobile = Number(req.body.mobile);
    const password = req.body.password;

    const newPrepaidR = new Prepaid({
        name,email,nic,mobile,password
    })

    newPrepaidR.save().then(() => {
        res.json("registered")
    }).catch((err) => {
        console.log.apply(err);
    })

})

router.route("/get").get((req,res)=>{

    Prepaid.find().then((prepaidRs) =>{
        res.json(prepaidRs)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/update/:nic").put(async(req,res) => {
    let userNic = req.params.nic;
    const {name,email,mobile,password} = req.body;

    const updatePrepaidR ={
        name,email,mobile,password
    }

    const update = await Prepaid.findOneAndUpdate(userNic,updatePrepaidR)
    .then(() => {
        res.status(200).send({status:"Update"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    })

})

router.route("/delete/:nic").delete(async(req,res) => {
    let userNic = req.params.nic;

    await Prepaid.findOneAndDelete(userNic)
    .then(() => {
        res.status(200).send({status:"User deleted"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error: err.message});
    })
})

router.route("/get/:nic").get(async(req,res) => {
    let nic = req.params.nic;
    const user = await Prepaid.findOne({nic})
    .then((prepaid) => {
        res.status(200).send({status:"user fetched",prepaid})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetched user",error: err.message});
    })
})


module.exports = router;
const express = require("express");
const Packages = require('../models/packagesModel');

const router = express.Router();

router.route("/add").post((req,res) => {
    const _id = Number(req.body._id);
    const pName = req.body.pName;
    const pDate = req.body.pDate;
    const pPrice = Number(req.body.pPrice);

    const newPackages = new Packages({
        _id,pName,pDate,pPrice
    })

    newPackages.save().them(() => {
        res.json("Package Added")
        console.log(newPackages);
    }).catch((err) =>{
        console.log(err);
    })
})
router.route("/get").get((req,res) => {

    Packages.find().then((packages) => {
        res.json(packages)
    }).catch((err) => {
        console.log(err);
    })

})

router.route("/get/:id").get(async(req,res) => {
    let packageId = req.params.id;
    const user = await Packages.findById(packageId)
    .then((package) => {
        res.status(200).send({status:"package fetched",package})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetched user",error: err.message});
    })
})

module.exports = router;
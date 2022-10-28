const router = require("express").Router();
const PrepaidRegister = require("../models/prepaidRegisterModel");

router.route("/addPrepaid").post((req,res) => {

    const name = req.body.name;
    const email = req.body.email;
    const nic = req.body.nic;
    const phoneNo = req.body.phoneNo;
    const password = req.body.password;

    const newPrepaidRegister = new PrepaidRegister({

        name,
        email,
        nic,
        phoneNo,
        password

    })

    newPrepaidRegister.save().then(() => {
        res.json("profile created successfully")
    }).catch((err) => {
        console.log(err);
    })

})

module.exports = router;
const router = require("express").Router();
const { Foreigner } = require("../controller/foreigner");

router.post("/", async (req, res) => {

    try{

        const foreigner = await Foreigner.findOne({email: req.body.email});
        if(foreigner)
           return res
                .status(409)
                .send({ message: "email with given fooreigner already Exist!. Please try again" });

            await new Foreigner({ ...req.body }).save();
            res.status(201).send({message: "Foreigner added succseefully!." });

    }catch(error){    
        res.status(500).send({ message: "Internal Server Error" });
    }
});

//for generate qr code

router.post("/insert-fgid", async (req, res) => {

    try {
        const forg = await Foreigner.findOne({ passport: req.body.passport }); 
        
        if (!forg) {
            return res
                .status(409)
                .send({ message: "Passport with given foreigner doesnt exists!" });
        } else {
            res.json({
                message: "successfully",
                forg,
                status: 200
            });
        }

        // const forge = await Foreigner.findOne({ email: req.body.email });

        // if (!forge) {
        //     return res
        //         .status(409)
        //         .send({ message: "Passport with given foreigner doesnt exists!" });
        // } else {
        //     res.json({
        //         message: "successfully",
        //         forg,
        //         status: 200
        //     });
        // }


    } catch (error) {

        res.status(500).send({ message: "Internal Server Error" });
    }

});

module.exports = router;
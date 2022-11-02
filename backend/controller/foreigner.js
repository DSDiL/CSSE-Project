const mongoose = require("mongoose");
const Joi = require("joi");
const { number } = require("joi");

const foreignerSchema = new mongoose.Schema ({

    email: {type: String, require},
    passport: { type: String, require },
    contact: { type: String, require },
});

const Foreigner = mongoose.model("foreigner", foreignerSchema);

const validate = (data) => {
    const schema = Joi.object({

        email: Joi.string().required().label("Age"),
        passport: Joi.string().required().label("Code"),
        contact: Joi.string().required().label("Initials"),
    });
};

module.exports = {Foreigner, validate}
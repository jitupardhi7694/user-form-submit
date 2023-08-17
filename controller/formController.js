const { validationResult } = require('express-validator');
const formModel = require('../models/formModel');
const userNameModel = require('../models/userNameModel');

// get user form
const getForm = async (req, res) => {
    try {
        const user = await userNameModel.findAll();
        res.render('form', {
            user,
        });
    } catch (error) {
        console.log(error);
    }
};
// save the user data
const formRegister = async (req, res) => {
    const { id, name, email, number, dob } = req.body;

    try {
        const saveUserForm = await formModel.create({
            name,
            email,
            number,
            dob,
        });

        console.log(
            `successfully submitted your application ${saveUserForm.name}`
        );

        return res.redirect(`/form/register-success`);
    } catch (error) {
        return console.error(error);
    }
};

module.exports = {
    getForm,
    formRegister,
};

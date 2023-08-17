const createUserName = require('../models/userNameModel');
// get home page
const getUserPage = async (req, res) => {
    await res.render('index');
};

// save
const userNameRegister = async (req, res, next) => {
    const { id, username } = req.body;

    try {
        const newUserName = await createUserName.create({
            username,
        });

        console.log(
            `successfully submitted your application ${newUserName.username}`
        );

        return res.redirect(`/form/register`);
    } catch (error) {
        return console.error(error);
    }
};

module.exports = {
    getUserPage,
    userNameRegister,
};

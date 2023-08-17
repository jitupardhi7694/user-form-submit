const express = require('express');
const router = express.Router();
const userNameController = require('../controller/userNameController');

router.get('/', async (req, res) => {
    await userNameController.getUserPage(req, res);
});
router.post('/', async (req, res) => {
    await userNameController.userNameRegister(req, res);
});

module.exports = router;

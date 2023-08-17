const express = require('express');
const router = express.Router();

const formController = require('../controller/formController');

router.get('/register', async (req, res) => {
    await formController.getForm(req, res);
});
router.post('/register', async (req, res) => {
    await formController.formRegister(req, res);
});
router.get('/register-success', async (req, res) => {
    await res.render('success');
});

module.exports = router;

const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
var user = [{ "name": "Vishnu", "address": "Alappuzha" }];

router.get('/user', async (req, res) => {
    res.send('Welcome to User page');
});


router.post('/user/signin', async (req, res) => {
    
    res.send('Welcome to User page');
});



module.exports = router;
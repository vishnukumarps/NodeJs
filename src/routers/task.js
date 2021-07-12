const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');

var tasks = [{ "name": "Task1", "description": "description1" }];


router.post('/task/add', async (req, res) => {
   tasks.push(req.body);
   res.send(tasks);
});

router.get('/task/:id', auth, async (req, res) => {
   var task = tasks.find(x => x.name === req.params.id);
   res.send(task);
});

module.exports = router;
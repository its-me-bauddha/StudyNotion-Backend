const express = require('express');
const { UserController } = require('../../controllers');
const router = express.Router();

router.post('/' ,UserController.createUser);
router.get('/:id' ,UserController.getUser);
router.get('/' ,UserController.getAllUser);

module.exports = router;
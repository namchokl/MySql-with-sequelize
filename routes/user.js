const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/users', userController.createUser);

router.get('/users', userController.getUsers);

router.get('/user/:userId', userController.getOneUser);

router.put('/user/:userId', userController.updateUser);

router.delete('/user/:userId', userController.deleteUser);

module.exports = router;

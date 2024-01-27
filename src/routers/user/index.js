const express = require('express');

const { asyncHandel } = require('../../helpers/asyncHelper');

const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/user/login', asyncHandel(userController.login));

module.exports = router;

const express = require('express');

const { regester, userlogin } = require('../Contorell/Usercon.js');

const authuser = require('../Midellware/Authuser.js');

const userroutes = express.Router();


userroutes.post('/user-resgretration', regester);
userroutes.post('/user-login', userlogin);

module.exports = userroutes;
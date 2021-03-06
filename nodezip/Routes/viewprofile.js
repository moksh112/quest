const express = require('express');
const verifyToken = require('../Helpers/verifytoken')
const jwt = require('jsonwebtoken');
const config = require('../config');
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const User = require("../Models/User")
const router = express.Router()
const Answer = require('../Models/answer')
const Community = require('../Models/community')




router.use(bodyParser())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.use(verifyToken)


router.post('/', (req, res) => {
    const username = req.user.userName
    const resu=User.findOne({userName:username}).select("-password").then((re=>{res.status(200).send(re);
    console.log(re);}))

});
module.exports = router

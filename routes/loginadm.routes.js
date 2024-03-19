const express = require('express');
const  loginadmser  = require("../controllers/auth.js");
const signup = require("../controllers/signup.js");
const router = express.Router();


 router.post('/loginadm' , loginadmser)
 router.post('/signup' , signup )
 
module.exports= router;

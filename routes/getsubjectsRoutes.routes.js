const express = require('express');
const router = express.Router();
const Physics = require('../schema/Physics.js');
const AppliedMathematics = require('../schema/AppliedMathematics.js')
const Arbic = require('../schema/AddArbic.js');
const Biology = require('../schema/Biology.js');
const Chemistry = require('../schema/Chemistry.js');
const Englich = require('../schema/Englich.js');
const French = require('../schema/French.js');
const Puremathematics = require('../schema/Puremathematics.js');

const matiral = ["Physics" , "AppliedMathematics" , "Arabic" , "Biology" , "Chemistry"  ,
 "Englich" , "French"  , "Puremathematics"] 

 const Schema = [ Physics ,  AppliedMathematics ,  Arbic , Biology , Chemistry , Englich , French
, Puremathematics]

for(let i = 0 ; i < 8 ; i++){
  router.get(`/${matiral[i]}`  , async (req , res) => {
    try{
      const AllExamsInData = await Schema[i].find();
      res.status(201).json(AllExamsInData);  
    }catch{
      res.status(500).send('حدث خطأ أثناء حفظ البيانات!');   
     }

  })
}

module.exports = router;



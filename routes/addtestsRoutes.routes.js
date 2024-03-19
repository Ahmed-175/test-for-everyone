const express = require('express');
const Physics = require('../schema/Physics.js');
const AppliedMathematics = require('../schema/AppliedMathematics.js')
const Arbic = require('../schema/AddArbic.js');
const Biology = require('../schema/Biology.js');
const Chemistry = require('../schema/Chemistry.js');
const Englich = require('../schema/Englich.js');
const French = require('../schema/French.js');
const Puremathematics = require('../schema/Puremathematics.js');
const router = express.Router();

const matiral = ["Physics" , "AppliedMathematics" , "Arabic" , "Biology" , "Chemistry"  ,
 "Englich" , "French"  , "Puremathematics"] 
 const Schema = [ Physics ,  AppliedMathematics ,  Arbic , Biology , Chemistry , Englich , French
, Puremathematics]
for(let i = 0 ; i < 8 ; i++){
  router.post(`/add${matiral[i]}`  , async (req , res) => {
    try {
      const { exam, NameOfExam } = req.body;
      const AllQuestionReqSchema = new Schema[i]({ exam, NameOfExam });
      await AllQuestionReqSchema.save();
      res.status(200).send('تم حفظ البيانات بنجاح!');
    } catch (error) {
      console.error(error);
      res.status(500).send('حدث خطأ أثناء حفظ البيانات!');
    }

  })
}
module.exports = router;

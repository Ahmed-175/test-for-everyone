const express = require("express");
const Englich = require('../../schema/Englich.js');

const etidEng = (req, res) => {
  const { id, NameOfExam, exam } = req.body;
  Englich.findOneAndUpdate({ _id: id }, { NameOfExam: NameOfExam, exam: exam })
    .then(() => {
      res.status(200).json({ message: "تم التحديث بنجاح" });
    })
    .catch(() => {
      res.status(500).json({ error: "حدث خطأ أثناء تحديث البيانات" });
    });
};

module.exports = etidEng;

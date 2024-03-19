const express = require("express");
const AppliedMathematics = require('../../schema/AppliedMathematics');

const etidApp = (req, res) => {
  const { id, NameOfExam, exam } = req.body;
  AppliedMathematics.findOneAndUpdate({ _id: id }, { NameOfExam: NameOfExam, exam: exam })
    .then(() => {
      res.status(200).json({ message: "تم التحديث بنجاح" });
    })
    .catch(() => {
      res.status(500).json({ error: "حدث خطأ أثناء تحديث البيانات" });
    });
};

module.exports = etidApp;
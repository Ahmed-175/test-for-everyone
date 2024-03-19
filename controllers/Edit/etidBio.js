const express = require("express");
const Biology = require('../../schema/Biology.js');

const etidBio = (req, res) => {
  const { id, NameOfExam, exam } = req.body;
  Biology.findOneAndUpdate({ _id: id }, { NameOfExam: NameOfExam, exam: exam })
    .then(() => {
      res.status(200).json({ message: "تم التحديث بنجاح" });
    })
    .catch(() => {
      res.status(500).json({ error: "حدث خطأ أثناء تحديث البيانات" });
    });
};

module.exports = etidBio;

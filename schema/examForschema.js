const mongoose = require('mongoose');
const SchemaOfExam = mongoose.Schema;
const TheExamForm = new SchemaOfExam({
    exam : { type :[Object] , required : true},
    NameOfExam : { type : String , required : true}
});
 const NewExam = mongoose.model('NewExam' , TheExamForm );
 module.exports = NewExam;

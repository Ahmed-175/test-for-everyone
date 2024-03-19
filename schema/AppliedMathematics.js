const mongoose = require('mongoose');
const SchemaOfExam = mongoose.Schema;
const T = new SchemaOfExam({
    exam : { type :[Object] , required : true},
    NameOfExam : { type : String , required : true}
});
 const AppliedMathematics = mongoose.model('AppliedMathematics' , T );
 module.exports = AppliedMathematics;
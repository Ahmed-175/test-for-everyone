const mongoose = require('mongoose');
const SchemaOfExam = mongoose.Schema;
const Q = new SchemaOfExam({
    exam : { type :[Object] , required : true},
    NameOfExam : { type : String , required : true}
});
 const Englich = mongoose.model('Englich' , Q);
 module.exports = Englich;
const mongoose = require('mongoose');
const SchemaOfExam = mongoose.Schema;
const A = new SchemaOfExam({
    exam : { type :[Object] , required : true},
    NameOfExam : { type : String , required : true}
});
 const Arbic = mongoose.model('Arbic' , A );
 module.exports = Arbic;
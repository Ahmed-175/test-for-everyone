const mongoose = require('mongoose');
const SchemaOfExam = mongoose.Schema;
const E = new SchemaOfExam({
    exam : { type :[Object] , required : true},
    NameOfExam : { type : String , required : true}
});
 const Biology = mongoose.model('Biology' , E);
 module.exports = Biology;
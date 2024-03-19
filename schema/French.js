const mongoose = require('mongoose');
const SchemaOfExam = mongoose.Schema;
const F = new SchemaOfExam({
    exam : { type :[Object] , required : true},
    NameOfExam : { type : String , required : true}
});
 const French = mongoose.model('French' , F );
 module.exports = French;
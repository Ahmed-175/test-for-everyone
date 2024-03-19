const mongoose = require('mongoose');
const SchemaOfExam = mongoose.Schema;
const R= new SchemaOfExam({
    exam : { type :[Object] , required : true},
    NameOfExam : { type : String , required : true}
});
 const Puremathematics = mongoose.model('Puremathematics' , R );
 module.exports = Puremathematics;
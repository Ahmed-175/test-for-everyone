const mongoose = require('mongoose');
const SchemaOfExam = mongoose.Schema;
const P = new SchemaOfExam({
    exam : { type :[Object] , required : true},
    NameOfExam : { type : String , required : true}
});
 const Physics = mongoose.model('Physics' , P );
 module.exports = Physics;
const mongoose = require('mongoose');
const SchemaOfExam = mongoose.Schema;
const C = new SchemaOfExam({
    exam : { type :[Object] , required : true},
    NameOfExam : { type : String , required : true}
});
 const Chemistry = mongoose.model('Chemistry' , C );
 module.exports = Chemistry;
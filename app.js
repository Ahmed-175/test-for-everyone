

const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes  = require('./routes/loginadm.routes.js')
const getsubjectsRoutes = require('./routes/getsubjectsRoutes.routes.js')
const addtestsRoutes = require('./routes/addtestsRoutes.routes.js')



app.use(cors()); 
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/getsubjects', getsubjectsRoutes);
app.use('/api/addtestssubjects', addtestsRoutes );

const path = require('path');
app.use(express.static(path.join(path.resolve(),"/frontend/dist")))
app.get('*' , (req ,res) =>{
  res.sendFile(path.join(path.resolve(),"frontend","dist","index.html"))
})

mongoose.connect('mongodb+srv://ahmed-farag:3vz2FpOETMiogRDB@cluster30.k993yuc.mongodb.net/all-user?retryWrites=true&w=majority').then(() => { 
  app.listen(port, () => {
    console.log(`is working now ${port}`);
  });
 }).catch((error) => { 
  console.log('that is wrong in connect in mongoose' ,error);
  })




  
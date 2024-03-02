const mongoose = require('mongoose');
require('dotenv').config()

exports.dbConnect = ()=>{
    mongoose.connect(API,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log('database connection successfull');})
    .then(()=>{console.log('database cannot connected successfully');})
}
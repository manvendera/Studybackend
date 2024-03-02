const mongoose = require('mongoose');
require('dotenv').config()
const API = process.env.DATABASE_URL
exports.dbConnect = ()=>{
    mongoose.connect(API,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log('database connection successfull');})
    .then(()=>{console.log('database cannot connected successfully');})
}
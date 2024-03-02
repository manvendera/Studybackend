const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      accountType: {
        type: String,
        enum: ['Student', 'Admin', 'Instructor'],
        required:true,
      },
      additionalDetails:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Profile' 
      },
      courses:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses' 
      },
      image:{
        type:String,
        required:true
      },
      courseProgress:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:' CourseProgress'
      }]
})

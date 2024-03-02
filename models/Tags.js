const mongoose = require('mongoose')
const tagsSchema = new mongoose.Schema({
  name:{
   trupe:String,
    required:true,
    
  },
  Description:{
    type:String,

  },
  course:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Course'
  }
})
module.exports = mongoose.model('Tag',tagsSchema)
const mongoose = require("mongoose");

// creating document schema  fo collection-> Student 
var StudentSchema = mongoose.Schema({

    fisrtName: {
        type: String,
        required: true,
        min: 3,
        max: 255,
      },
      lastName: {
        type: String,
        required: true,
        min: 3,
        max: 255,
      },
    age: {
         type:Number,       
         required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
  });
  
  // create model after schema creation 
  var StudentModel = mongoose.model("Students",StudentSchema);
  
 // export student 
  module.exports = StudentModel;


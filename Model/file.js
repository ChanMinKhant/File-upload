const mongoose = require("mongoose"); 
 const Schema = mongoose.Schema; 
  
 const fileSchema = new Schema({ 
   fileName: { 
     type: String, 
   }, 
   filePath: { 
     type: String, 
     //required: true, 
   }, 
   year: { 
     type: String, 
     //required: true, 
   },
   semester: {
     type: String,
     //require: true,
   }
   
 }); 
  
 module.exports = mongoose.model("file", fileSchema);
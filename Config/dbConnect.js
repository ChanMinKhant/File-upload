const mongoose = require("mongoose"); 
  
 const connectDB = async () => { 
   try { 
     await mongoose.connect(process.env.MONGO_URI);
     console.log('dc connected successfully');
   } catch (err) { 
     console.log("db err: ", err); 
   } 
 }; 
  
 module.exports = connectDB;
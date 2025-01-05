const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    phone:String
})

module.exports=mongoose.model('userData',userSchema);
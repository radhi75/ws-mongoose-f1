const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    pass:{type:String,required:true},
    name:String,
    phone:Number,
    address:String,
})
module.exports=mongoose.model("user",userSchema)
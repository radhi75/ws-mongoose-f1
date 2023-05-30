const mongoose=require("mongoose")


const blogSchema=new mongoose.Schema({
   title:String,
   subject:String,
   image:String,
})
module.exports=mongoose.model("blog",blogSchema)
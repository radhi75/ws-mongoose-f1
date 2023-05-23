const mongoose=require("mongoose")


const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ws-mongoose")
        console.log("db is connected")

    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB
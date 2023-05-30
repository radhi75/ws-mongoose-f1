const mongoose=require("mongoose")


const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://dadiaissa75:radhi123@cluster0.gwhgwsn.mongodb.net/")
        console.log("db is connected")

    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB
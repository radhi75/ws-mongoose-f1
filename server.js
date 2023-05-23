const express=require("express")
const connectDB = require("./Config/connectDB")
const userRoute = require("./routes/userRoutes")
const app=express()

const port=5000
app.use(express.json())

connectDB()
app.use("/api/user",userRoute)
app.listen(port,()=>console.log(`app is running on port ${port}`))

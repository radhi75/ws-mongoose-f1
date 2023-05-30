const express=require("express")
const connectDB = require("./Config/connectDB")
const userRoute = require("./routes/userRoutes")
const blogRoute = require("./routes/blogRoutes")
const app=express()

const port=5000
app.use(express.json())

connectDB()
app.use("/api/user",userRoute)
app.use("/api/blog",blogRoute)
app.listen(port,()=>console.log(`app is running on port ${port}`))

const express=require("express")
const { Adduser, Getuser, DeleteUser, EditUser } = require("../controlles/userControlles")


const userRoute=express.Router()

userRoute.post("/add",Adduser)

userRoute.get('/',Getuser)

userRoute.delete("/:id",DeleteUser)

userRoute.put("/edit/:id",EditUser)

module.exports=userRoute
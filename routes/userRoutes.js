const express=require("express")
const {  Getuser, DeleteUser, EditUser, Register, Login } = require("../controlles/userControlles")
const { registervalidation, validation, loginvalidation } = require("../middleware/validator")
const { isAuth } = require("../middleware/isAuth")


const userRoute=express.Router()

userRoute.post("/register",registervalidation,validation,Register)

userRoute.post("/login",loginvalidation,validation,Login)

userRoute.get("/current",isAuth,(req,res)=>{
    res.send({ user: req.user })
})

userRoute.get('/',Getuser)

userRoute.delete("/:id",DeleteUser)

userRoute.put("/edit/:id",EditUser)

module.exports=userRoute
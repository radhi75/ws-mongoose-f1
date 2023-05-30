const express=require("express")
const { Addblog, Getblog, Deleteblog, Editblog } = require("../controlles/blogControlles")


const blogRoute=express.Router()

blogRoute.post("/add",Addblog)

blogRoute.get('/all',Getblog)

blogRoute.delete("/delete/:id",Deleteblog)

blogRoute.put("/edit/:id",Editblog)

module.exports=blogRoute
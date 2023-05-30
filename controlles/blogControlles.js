const blogSchema=require("../models/blog")

exports.Addblog=async(req,res)=>{
    try {
        const blog=new blogSchema(req.body)
       await blog.save()
        res.status(201).send({msg:"new blog",blog})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.Getblog=async(req,res)=>{
    try {
        const blog=await blogSchema.find()
        res.status(201).send({msg:"list of blogs",blog})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.Deleteblog=async(req,res)=>{
    try {
        await blogSchema.findByIdAndDelete(req.params.id)
        res.status(201).send("blog was deleted")
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.Editblog=async(req,res)=>{
    try {
        const blog=await blogSchema.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true}
            )
        res.status(201).send({msg:"blog updated",blog})
    } catch (error) {
        res.status(500).send(error)
    }
}
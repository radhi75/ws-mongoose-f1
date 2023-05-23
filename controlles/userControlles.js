const userSchema=require("../models/user")

exports.Adduser=async(req,res)=>{
    try {
        const user=new userSchema(req.body)
       await user.save()
        res.status(201).send({msg:"new user",user})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.Getuser=async(req,res)=>{
    try {
        const user=await userSchema.find()
        res.status(201).send({msg:"list of users",user})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.DeleteUser=async(req,res)=>{
    try {
        await userSchema.findByIdAndDelete(req.params.id)
        res.status(201).send("user was deleted")
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.EditUser=async(req,res)=>{
    try {
        const user=await userSchema.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true}
            )
        res.status(201).send({msg:"user updated",user})
    } catch (error) {
        res.status(500).send(error)
    }
}
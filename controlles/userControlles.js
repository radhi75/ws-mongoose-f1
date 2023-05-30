const userSchema=require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

exports.Register=async(req,res)=>{
    const{email,pass}=req.body
    try {
        const found=await userSchema.findOne({email})
        if(found){
            res.status(400).send({errors:[{msg:"email already exist"}]})
        }else{
            const user=new userSchema(req.body)
            const salt=10
            const hashpass=bcrypt.hashSync(pass,salt)
            user.pass=hashpass
            const payload={id:user._id}
            const token=jwt.sign(payload,"hello")
            await user.save()
            res.status(200).send({msg:"Registered with success",user,token})
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.Login=async(req,res)=>{
    const {email,pass}=req.body
    try {
        const user=await userSchema.findOne({email})
        if(!user){
            res.status(400).send({errors:[{msg:"email does not exists"}]})
        }else{
            const match=bcrypt.compareSync(pass,user.pass)
            if(!match){
                res.status(400).send({errors:[{msg:"wrong password"}]})
            }else{
                const payload={id:user._id}
                const token=jwt.sign(payload,"hello")
                res.status(200).send({msg:"logged in",user,token})
            }
        }
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
    const {pass}=req.body
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
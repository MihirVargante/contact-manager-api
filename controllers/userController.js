const asyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")
const User=require('../models/userModel')

const bcrypt=require("bcrypt")
const registerUser=asyncHandler(async (req,res)=>{

    const {username,email,password}=req.body

    if(!username,!email,!password){
        res.status(400)
        throw new Error("all fields are mandatory")
    }
    const userAvailable=await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error("User already available")
    }
    const hashPass=await bcrypt.hash(password,10)

    const user=await User.create({
        username,
        email,
        password:hashPass
    })
    console.log("user created :",user)
    if(user){
        res.status(201).json({_id:user.id,email:user.email})
    }else{
        res.status(400);
        throw new Error("user data was not valid")
    }
    console.log("hashed password :",hashPass)
    res.json({message:"regestering the user"})
})
const loginUser=asyncHandler(async (req,res)=>{
    const {email,password}=req.body

    if(!email || !password){
        res.status(400)
        throw new Error("all fields are mandatory")
    }
    const user=await User.findOne({email})
    console.log("user exit or no :",user)
    console.log(user.password)
    console.log(password)
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        },process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"1m"})
        res.status(200).json(accessToken);

    }
    else{
        res.status(401)
        throw new Error("email or pass is not valid")
    }
})
const currentUser=asyncHandler(async (req,res)=>{
    res.json({message:"current user"})
})

module.exports={registerUser,loginUser,currentUser}
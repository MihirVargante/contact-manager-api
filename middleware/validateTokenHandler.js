const asyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")

const validateToken=asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader=req.headers.authorization || req.headers.Authorization
    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1]
        console.log(token)
        console.log(process.env.ACCESS_TOKEN_SECRET)
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("user is not authorized")
            }
            console.log(decoded)
        })
    }
})

module.exports=validateToken
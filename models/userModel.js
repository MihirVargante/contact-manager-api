const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"pls fill username"],
    },
    email:{
        type:String,
        required:[true,"pls fill email"],
        unique:[true,"pls dont use mail that has been already used"],
    },
    password:{
        type:String,
        required:[true,"pls fill password"],
    },
},
{
    timestamp:true
})

module.exports=mongoose.model("user",userSchema)
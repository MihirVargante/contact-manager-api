const mongoose=require("mongoose")

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"pls add contact name"]
    },
    email:{
        type:String,
        required:[true,"pls add your mail"]
    },
    Phone:{
        type:String,
        required:[true,"pls add phone number"]
    },

},
{
    timestamps:true,
})

module.exports=mongoose.model("Contact",contactSchema)
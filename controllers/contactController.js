const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModel")
const getContacts=asyncHandler(async (req,res)=>{
    const Contacts=await Contact.find()
    res.status(200).json(Contacts)
})
const postContact=asyncHandler(async(req,res)=>{
    console.log("we got the contact as :",req.body)
    const {name,email,Phone}=req.body

    if(!name || !email || !Phone){
        res.status(400)
        throw new Error("pls enter all fields")
    }
    try{
        const addContact=await Contact.create({
            name,
            email,
            Phone
        })
    }catch(err){
        console.log("we have error in creating :",err)
    }
    console.log(addContact)
    res.status(201).json(addContact)
})
const putContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    const updateContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    )
    res.status(200).json(updateContact)
})
const deleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    await Contact.findByIdAndDelete(req.params.id)
    res.status(200).json(contact)
})
const getOneContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json(contact)
})
module.exports={getContacts,postContact,putContact,deleteContact,getOneContact}
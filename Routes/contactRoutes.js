const express=require("express")
const router=express.Router()
const {getContacts,postContact,putContact,deleteContact,getOneContact}=require("../controllers/contactController")
router.route("/").get(getContacts)
router.route("/").post(postContact)
router.route("/:id").put(putContact)
router.route("/:id").delete(deleteContact)
router.route("/:id").get(getOneContact)
module.exports=router
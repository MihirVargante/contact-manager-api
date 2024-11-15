console.log("we are making contact manager")
const express=require("express")
const dotenv=require("dotenv").config()
const errorHandler=require("./middleware/errorHandler")
const connectDb=require("./config/dbConnection")

connectDb()
const app=express()
app.use(express.json())
console.log("port :",process.env.PORT)
const port=process.env.PORT || 5000
app.use("/api/contacts",require("./Routes/contactRoutes"))
app.use("/api/users",require("./Routes/userRoutes"))
app.use(errorHandler)
app.listen(port,()=>{
    console.log("we are listening on port:",port)
})
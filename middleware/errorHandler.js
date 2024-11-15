const errorHandler=(err,req,res,next)=>{
    console.log("we are in errorhandler")
    const statusCode=res.statusCode ? res.statusCode:500
    switch(statusCode){
        case 400:
            res.json({title:"Validation Failed",message:err.message,stackTrace:err.stack})
            break;
        case 404:
            res.json({title:"Not fount",message:err.message,stackTrace:err.stack})
            break;
        case 401:
            res.json({title:"Unauthorised access",message:err.message,stackTrace:err.stack})
            break;
        case 403:
            res.json({title:"Forbidden",message:err.message,stackTrace:err.stack})
            break;
        case 500:
            res.json({title:"Server Error",message:err.message,stackTrace:err.stack})
            break;
        default:
            console.log("no errors");
            break;
    }
}
module.exports=errorHandler
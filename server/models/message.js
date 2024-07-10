const mongoose=require("mongoose")

const message=new mongoose.Schema({
        sender:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
        reciever:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
        content:{
            type:String,
            required:true,
        },
        time:{
            type:Date,
            default:Date.now()
        },
        

})

module.exports=mongoose.model("messages",message)
const mongoose = require("mongoose");
const ewSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:false
    },
    name:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
    message:{
        type:String,
        required:false },
})
const collection = mongoose.model("collection",ewSchema)

module.exports=collection
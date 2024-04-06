const mongoose = require("mongoose");
const CartSchema =new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
    
})
 

module.exports= mongoose.model("Cart",CartSchema)
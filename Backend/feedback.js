const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Trapti:tkg4002@cluster0.a97rcaf.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log('failed',e);
})

const feedbackSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
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

const Feedback = mongoose.model('feedback', feedbackSchema);

module.exports = Feedback;

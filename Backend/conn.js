const mongoose=require("mongoose")
//mongodb+srv://Trapti:tkg4002@cluster0.a97rcaf.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://Trapti:tkg4002@cluster0.a97rcaf.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log('failed',e);
})
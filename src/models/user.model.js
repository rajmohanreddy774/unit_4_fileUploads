const mongoose=require("mongoose");

const usermodel=new mongoose.Schema({
    firstName:{type:String, required:true},
    path:{type:String, required:true},

    
},
{
    versionKey:false,
    timestamps:true
})

const User=mongoose.model("user",usermodel)
module.exports=User;


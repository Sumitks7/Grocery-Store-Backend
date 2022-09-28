const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        retuired:true
    },
    email:{
        type:String,
        reuired:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    }    
})

const Userdb = mongoose.model('userdb',schema);

module.exports=Userdb;
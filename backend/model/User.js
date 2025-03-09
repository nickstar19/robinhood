const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    memberName:
    {
        type:String,
        required:true
    },
    memberEmail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    addedStatus:{
        type:Number,
        required:true
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User;
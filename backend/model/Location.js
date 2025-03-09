const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    link:{
        type:String,
        required:true
    },
    ownerName:{
        type:String,
        required:false
    },
    ownerContact:{
        type:Number,
        required:false
    },
    memberId:{
        type:String,
        required:false
    },
    memberName:{
        type:String,
        required:false
    },
    collectionStatus:{
        type:Number,
        required:true
    }
})

const Location = mongoose.model('Location',locationSchema);

module.exports = Location
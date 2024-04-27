const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userschema = new schema({

    email : {
        type : String ,
        required : true 
    } ,
    password : {
        type : String ,
        required : true
    }
    ,
    isadmin : {
        type : Boolean,
        default : true
    } ,
    resetoken : String ,
    resetokenexpire : Date
});

module.exports = mongoose.model('user',userschema);
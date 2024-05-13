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
        default : false
    } ,
    resetoken : String ,
    resetokenexpire : Date ,

    department : String
});

module.exports = mongoose.model('user',userschema);

const User = require('../models/users')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const flash = require('connect-flash')


exports.getindex = (req,res,next) =>{
    res.render('index' , {});
}

exports.getsignup = (req,res,next) =>{
    res.render('auth/signup' , {});
}

exports.postsignup = (req,res,next) => {
    
    
    bcrypt.hash(req.body.password,12)
    .then( result => {

        const user = new User({
            email : req.body.email ,
            password : result
        })
        
        return user.save();

    })
    .then( result => {
        res.redirect('/login');
    })
    .catch( err => {
        console.log(err);
    })

}

exports.getlogin = (req,res,next) => {

    let message = req.flash('error');

    

     if (message.length > 0)
     {
          message = message[0];
     }
     else
     {
        message = null ;
     }

    res.render('auth/login',{
        errormessage : message 
    });
}

exports.postlogin = (req,res,next) => {
    
    const errors = validationResult(req);

    if ( !errors.isEmpty() )
    {
      
        req.flash('error',errors.array()[0].msg);

        return res.redirect('/login');
    }

    
    User.findOne({email : req.body.email})
    .then( user => {
        req.session.user = user;
        req.session.isloggedin = true;
        return req.session.save( () => {
             res.redirect('/admin');
        })
    })
    .catch ( err => {
        console.log(err);
    })

   


}

exports.getlogout = (req,res,next) => {
    req.session.destroy( (err) => {
        console.log(err);
        res.redirect('/');
    });
}

exports.getreset = (req,res,next) => {
    res.render('auth/forgot-password' , {} );
}

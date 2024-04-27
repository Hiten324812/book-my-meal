const User = require('../models/users')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const flash = require('connect-flash')
const nodemailer = require('nodemailer')
const crypto = require('crypto')

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'hitenmistry354@gmail.com',
        pass : 'hmhk rifp ajqa vnia'
    }});



exports.getindex = (req,res,next) =>{
    res.render('index' , {});
}

exports.getsignup = (req,res,next) =>{

    let message = req.flash('error')

    if (message.length > 0 )
    {
        message = message[0]
    }
    else
    {
        message = null
    }

    res.render('auth/signup' , { errormessage : message });
}

exports.postsignup = (req,res,next) => {
    
    let errors = validationResult(req);

    if ( !errors.isEmpty() )
    {
        req.flash('error','email id already exists')
        return res.redirect('/signup');
    }
    
    bcrypt.hash(req.body.password,12)
    .then( result => {

        const user = new User({
            email : req.body.email ,
            password : result
        })
        
        return user.save();

    })
    .then( result => {
        var mailoptions = 
            {
                from : 'shop-hiten@gmail.com',
                to : req.body.email,
                subject : 'signup completed for BookMyMeal',
                html : '<h1> you sucessfully signed up! </h1>'
             } 

            return transporter.sendMail(mailoptions, function(err,info) {
              if (err)
              {
                console.log(err);
              }
              else
              {
                console.log('email send : ' + info.response);
              }
        })
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

    let message = req.flash('error');

    if (message.length > 0)
    {
         message = message[0];
    }
    else
    {
       message = null ;
    }


    res.render('auth/forgot-password' , { errormessage : message } );
}

exports.postreset = (req,res,next) => {

    const errors = validationResult(req)

    if ( !errors.isEmpty() )
    {
        console.log(errors.array());

        req.flash('error','No email id found')

       return res.redirect('/reset');
    }

    crypto.randomBytes(32, (err,buffer) => {
        if (err)
        {
           console.log(err);
           return res.redirect('/reset');
        }

        const token = buffer.toString('hex');
        
        User.findOne({ email : req.body.email })
        .then( user => {
           user.resetoken = token;
           user.resetokenexpire = Date.now() + 3600*1000; // milliseconds 
           return user.save();
        })
        .then( result => {

           var mailoptions = 
           {
               from : 'shop-hiten@gmail.com',
               to : req.body.email,
               subject : 'password reset',
               html : `
               <p> you requested a password reset </p>
               <p> click this <a href="http://localhost:3000/reset/${token}"> link to set a new password  </a>`
            } 

            transporter.sendMail(mailoptions, function(err,info) {
             if (err)
             {
               console.log(err);
             }
             else
             {
               console.log('email send : ' + info.response);
             }
       })

       res.redirect('/login');

        })
        .catch(err => {
           console.log(err);
        })

        
 });


}

exports.getnewpassword = (req,res,next) =>{
   
    
    const token = req.params.token;
    
    User.findOne({
       resetoken : token , 
       resetokenexpire : { $gt : Date.now() }
   })
   .then( user => {

       
       if(!user)
       {
            req.flash('error','No valid token!!!');

            return res.redirect('/reset');
       }

       let message = req.flash('error');

       if (message.length > 0)
       {
          message = message[0];
       }
       else
       {
         message = null ;
       }

      res.render('auth/new-password', {
       errormessage : message ,
       userid : user._id.toString(),
       token : token

      })


   })
   .catch( err => {
       console.log(err);
   });





}


exports.setnewpassword = (req,res,next) => {

    let newpassword = req.body.newpassword;
    let userid = req.body.userid;
    let token = req.body.passwordtoken;
    let resetuser;

  
    User.findOne({resetoken : token ,  resetokenexpire : 
      { $gt : Date.now(),
      } ,
      _id : userid })
      .then( user => {
          resetuser = user;
          return bcrypt.hash(newpassword,12);
      })
      .then( pass =>{
  
          resetuser.password = pass;
          resetuser.resetoken = undefined;
          resetuser.resetokenexpire = undefined;
  
          return resetuser.save();
      })
      .then( result => {
          return res.redirect('/login');
      })
      .catch( err => {
          console.log(err);
      })
  
  
  }
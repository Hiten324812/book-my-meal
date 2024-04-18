
const User = require('../models/users')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

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
    res.render('auth/login',{});
}

exports.postlogin = async(req, res) => {
    try {
    const { email, password } = req.body;

    const user = await User.findOne({ email :  email });
    if (!user) {
    return res.status(401).json({ error: 'email id not found' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
    return res.status(401).json({ error: 'password is wrong' });
    }
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
    expiresIn: '1h',
    });
    res.status(200).json({ token });
    } catch (error) {
    res.status(500).json({ error: 'Login failed' });
    }
    }

exports.getreset = (req,res,next) => {
    res.render('auth/forgot-password' , {} );
}
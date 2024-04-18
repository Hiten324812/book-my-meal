
const express = require('express')
const authcontroller = require('../controllers/auth')
const { body } = require('express-validator')
const User = require('../models/users')

const router = express.Router();

router.get('/',authcontroller.getindex);
router.get('/signup',authcontroller.getsignup);
router.post('/signup',authcontroller.postsignup);
router.get('/login',authcontroller.getlogin);
router.post('/login', [
    body('email' , 'email not valid')
    .custom( async(value , {req}) => {

        const user = await User.findOne({email : value });

        if (!user)
        {
               throw new Error('email id not found');
        }

    })
] ,authcontroller.postlogin);
router.get('/reset',authcontroller.getreset);

module.exports = router;

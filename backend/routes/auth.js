
const express = require('express')
const authcontroller = require('../controllers/auth')
const { body } = require('express-validator')
const User = require('../models/users')
const bcrypt = require('bcrypt')
const middleware = require('../middleware/isloggedin')

const router = express.Router();

router.get('/',authcontroller.getindex);
router.get('/signup', middleware.notloggedin ,authcontroller.getsignup);
router.post('/signup', body('email')
.custom( async ( value , {req}) => {
    const user = await User.findOne({ email : req.body.email });

    if (user)
    {
        throw new Error('email id already exists')
    }
}) ,authcontroller.postsignup);
router.get('/login', middleware.notloggedin ,authcontroller.getlogin);
router.post('/login', [
    body('email' , 'email not valid')
    .custom( async(value , {req}) => {

        const user = await User.findOne({email : value });

        if (!user)
        {
               throw new Error('email id not found');
        }

    }) ,
    body('password')
    .custom( async(value, {req}) => {

        const user = await User.findOne({email : req.body.email})

        if (user)
        {
            const match = await bcrypt.compare(value,user.password)

            if (!match)
            {
                throw new Error('password is wrong');
            }
        }
        
    })
] ,authcontroller.postlogin);
router.get('/reset',authcontroller.getreset);
router.post('/reset',  body('email')
.custom( async (value , {req}) => {
   const user = await User.findOne({ email : req.body.email });

   if (!user)
   {
       throw new Error('email id not found')
   }
}), authcontroller.postreset)
router.get('/reset/:token',authcontroller.getnewpassword)
router.post('/setnewpassword', authcontroller.setnewpassword);
router.get('/logout',authcontroller.getlogout);

module.exports = router;

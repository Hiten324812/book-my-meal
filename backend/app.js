const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const authroutes = require('./routes/auth');
const adminroutes = require('./routes/admin');
const path = require('path');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const mongo = require('connect-mongodb-session')(session);
const flash = require('connect-flash') ;


app.set('view engine','ejs');
app.set('views','frontend');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

const store = new mongo({
    uri : 'mongodb+srv://hitenmistry354:hiten@cluster0.axrsdae.mongodb.net/bookmymeal',
    collection : 'session'
});

app.use(session({ secret : 'my name is hiten' , 
resave : false ,
 saveUninitialized : false ,
store : store ,
cookie: {
    maxAge: 24*60*60*1000 // 24 hours session 
  }

}));

app.use(flash());
app.use(authroutes);
app.use('/admin',adminroutes);


mongoose.connect('mongodb+srv://hitenmistry354:hiten@cluster0.axrsdae.mongodb.net/bookmymeal')
.then(result => {
    app.listen(3000);
})
.catch( err => {
    console.log(err);
})

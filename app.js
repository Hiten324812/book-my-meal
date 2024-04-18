
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app = express()
const authroutes = require('./routes/auth')
const path = require('path')
const jwt = require('jsonwebtoken')

app.set('view engine','ejs');
app.set('views','frontend');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(authroutes);

mongoose.connect('mongodb+srv://hitenmistry354:hiten@cluster0.axrsdae.mongodb.net/bookmymeal')
.then(result => {
    app.listen(3000);
})
.catch( err => {
    console.log(err);
})

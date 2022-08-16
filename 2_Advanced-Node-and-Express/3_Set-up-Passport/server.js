'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');



const app = express();

fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//#1
//set up for pub with express app.
app.set("view engine", "pug")
app.set("views", "./views/pug")

//#3
let session = require("express-session")
let passport = require("passport")

/*
  Please note that secure: true is a recommended option. However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies. If secure is set, and you access your site over HTTP, 
  the cookie will not be set. If you have your node.js behind a proxy and are using secure: true, you need to set "trust proxy" in express:
*/
app.use(session({
  secret: process.env['SESSION_SECRET'],
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

app.route('/').get((req, res) => {
  //#2 2nd argument is an object and the data inside this object will be used by pug during template rendering to render differently the page (this is similar than EJS or other rendering template libraries)
  res.render("index", {title: 'Hello', message: 'Please login'})
});

//#4
/* Save user Id to a cookie */
passport.serializeUser((user, done) => {
  //done(error, user._id) 
  done(null, user._id)
})

/* Retrieve User details from cookie */
passport.deserialize((id, done) => {
  myDataBase = db.connect()
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});


'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

//#12
const routes = require('./routes.js');
const auth = require("./auth.js");
let passport = require("passport");


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





/*
  Please note that secure: true is a recommended option. However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies. If secure is set, and you access your site over HTTP, 
  the cookie will not be set. If you have your node.js behind a proxy and are using secure: true, you need to set "trust proxy" in express:
*/
//debug for replit https://stackoverflow.com/questions/36137873/using-app-set-to-set-trust-proxy | https://stackoverflow.com/questions/39930070/nodejs-express-why-should-i-use-app-enabletrust-proxy
// https://stackoverflow.com/questions/44039069/express-session-secure-cookies-not-working
app.set('trust proxy', 1);
app.use(session({
  secret: process.env['SESSION_SECRET'],
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());


myDB(async client => {
  const myDataBase = await client.db('advancednode').collection('users');

  routes(app, myDataBase);
  auth(app, myDataBase);
  
      // Be sure to add this...
  }).catch(e => {
    app.route('/').get((req, res) => {
      res.render('index', { title: e, message: 'Unable to login' });
    });
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port " + process.env.PORT);
});


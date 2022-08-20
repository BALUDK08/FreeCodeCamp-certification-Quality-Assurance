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
//#17
const http = require('http').createServer(app);
const io = require('socket.io')(http);

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

//#20
const passportSocketIo = require('passport.socketio');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });





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
  cookie: { secure: true },
  key: 'express.sid',
  store: store
}));
app.use(passport.initialize());
app.use(passport.session());



//#20
io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: 'express.sid',
    secret: process.env.SESSION_SECRET,
    store: store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail
  })
);


myDB(async client => {
  const myDataBase = await client.db('advancednode').collection('users');

  routes(app, myDataBase);
  auth(app, myDataBase);

  let currentUsers = 0;
  
  io.on('connection', socket => {
    console.log('user ' + socket.request.user.username + ' connected');
    ++currentUsers;

    io.emit('user count', currentUsers);
    
    io.emit('user', {
      username: socket.request.user.username,
      currentUsers,
      connected: true
    });

    socket.on('chat message', (message) => {
      io.emit('chat message', { username: socket.request.user.username, message });
    });

    //#19
    socket.on('disconnect', () => {
      /*anything you want to do on disconnect*/
      --currentUsers;
      io.emit('user count', currentUsers);
      
      io.emit('user', {
        username: socket.request.user.username,
        currentUsers,
        connected: false
      });
    });
  });
  
  
      // Be sure to add this...
  }).catch(e => {
    app.route('/').get((req, res) => {
      res.render('index', { title: e, message: 'Unable to login' });
    });
});


function onAuthorizeSuccess(data, accept) {
  console.log('successful connection to socket.io');

  accept(null, true);
}

function onAuthorizeFail(data, message, error, accept) {
  if (error) throw new Error(message);
  console.log('failed connection to socket.io:', message);
  accept(null, false);
}


http.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port " + process.env.PORT);
});


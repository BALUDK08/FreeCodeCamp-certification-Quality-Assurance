'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
//#6
const LocalStrategy = require('passport-local');


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
const ObjectID = require('mongodb').ObjectID;



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





//#5
//this is already setup for us inside connection.js but just for the sake of simplicity I added here inside comment
//const { MongoClient } = require('mongodb');
//let uri = process.env['MONGO_URI']
//const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });

myDB(async client => {
  const myDataBase = await client.db('advancednode').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    //Change the response to render the Pug template
    res.render('index', {
      title: 'Connected to Database',
      message: 'Please login',
      showLogin: true
    });
  });

  //#7
  app.route("/login").post(passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {
    res.redirect("/profile")
  })

  //#8
  app.route("/profile").get(ensureAuthenticated, (req, res) => {
    //#9
    res.render('profile', {username: req.user.username});
  })

  //#10
  app.route("/logout").get((req, res) => {
    req.logout();
    res.redirect("/");
  })

  app.use((req, res, next) => {
    res.status(404).type('text').send('Not Found');
  });

  // Serialization and deserialization here...
  //#4
  /*
  NOTE: This deserializeUser will throw an error until we set up the DB in the next step, so for now comment out the whole block and just call done(null, null) in the function deserializeUser.
  */
  /* Save User Id to a cookie */
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  /* Retrieve User details from cookie */
  passport.deserializeUser((userId, done) => {
    db.collection("users").findOne(
      { _id: new ObjectId(userId) },
      (error, doc) => {
        done(null, doc);
      }
    );
  });

  //#6
  passport.use(new LocalStrategy(
    function (username, password, done) {
      myDataBase.findOne({username: username}, function (err, user) {
        console.log('User '+ username +' attempted to log in.');
        if(err)
        {
          return done(err);
        }
        if(!user) {return done(null, false); }
        if(password !== user.password)
        {
          return done(null, false);
        }
        return done(null, user);
      })
      
    }
  ))
  

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('index', { title: e, message: 'Unable to login' });
  });
});


//#8
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port " + process.env.PORT);
});


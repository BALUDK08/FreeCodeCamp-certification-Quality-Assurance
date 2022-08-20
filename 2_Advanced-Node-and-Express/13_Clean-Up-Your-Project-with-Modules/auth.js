let ObjectId = require('mongodb')
//#6
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
let passport = require("passport");
const ObjectID = require('mongodb').ObjectID;
const GitHubStrategy = require('passport-github2').Strategy;

module.exports = function (app, myDataBase) {
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
  passport.deserializeUser((id, done) => {
    myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) =>     {
      if (err) return console.error(err);
      done(null, doc);
    });
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
          if (!bcrypt.compareSync(password, user.password)) { 
            return done(null, false);
          }
          return done(null, user);
        })
        
      }
    ))

  
    //#15
    passport.use(new GitHubStrategy({
      clientID: process.env['GITHUB_CLIENT_ID'],
      clientSecret: process.env['GITHUB_CLIENT_SECRET'],
      callbackURL: 'https://fcc-advanced-node-and-express.xavierpierre.repl.co/auth/github/callback'
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      //Database logic here with callback containing our user object
      //#16
      myDataBase.findAndModify(
        { id: profile.id },
        {},
        {
          $setOnInsert: {
            id: profile.id,
            name: profile.displayName || 'John Doe',
            photo: profile.photos[0].value || '',
            email: Array.isArray(profile.emails) ? profile.emails[0].value : 'No public email',
            created_on: new Date(),
            provider: profile.provider || ''
          },
          $set: {
            last_login: new Date()
          },
          $inc: {
            login_count: 1
          }
        },
        { upsert: true, new: true },
        (err, doc) => {
          return cb(null, doc.value);
        }
      );
    }
  ));

}
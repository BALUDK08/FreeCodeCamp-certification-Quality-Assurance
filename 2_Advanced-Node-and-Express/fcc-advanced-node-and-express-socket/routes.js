const bcrypt = require('bcrypt');
let passport = require("passport");


module.exports = function (app, myDataBase) {
    
  //#5
  //this is already setup for us inside connection.js but just for the sake of simplicity I added here inside comment
  //const { MongoClient } = require('mongodb');
  //let uri = process.env['MONGO_URI']
  //const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  

  
    // Be sure to change the title
    app.route('/').get((req, res) => {
      //Change the response to render the Pug template
      res.render('index', {
        title: 'Connected to Database',
        message: 'Please login',
        showLogin: true,
        showRegistration: true,
        showSocialAuth: true
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

    //#17
    app.route('/chat').get(ensureAuthenticated, (req, res) => {
      res.render('chat', { user: req.user });
    });
  
    //#10
    app.route("/logout").get((req, res) => {
      req.logout();
      res.redirect("/");
    })
  

  
    //#11 registration 
    app.route('/register')
    .post((req, res, next) => {
      myDataBase.findOne({ username: req.body.username }, function(err, user) {
        if (err) {
          next(err);
        } else if (user) {
          res.redirect('/');
        } else {
          //#12
          let hash = bcrypt.hashSync(req.body.password, 12);
          myDataBase.insertOne({
            username: req.body.username,
            password: hash
          },
            (err, doc) => {
              if (err) {
                res.redirect('/');
              } else {
                // The inserted document is held within
                // the ops property of the doc
                next(null, doc.ops[0]);
              }
            }
          )
        }
      })
    },
      passport.authenticate('local', { failureRedirect: '/' }),
      (req, res, next) => {
        res.redirect('/profile');
      }
    );

  //#14
  app.route('/auth/github').get(passport.authenticate('github'));
  app.route('/auth/github/callback').get(passport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
  });

      app.use((req, res, next) => {
      res.status(404).type('text').send('Not Found');
    });
  

}


//#8
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

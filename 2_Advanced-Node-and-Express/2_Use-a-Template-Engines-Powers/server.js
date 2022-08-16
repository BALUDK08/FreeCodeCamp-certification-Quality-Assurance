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

app.route('/').get((req, res) => {
  //#2 2nd argument is an object and the data inside this object will be used by pug during template rendering to render differently the page (this is similar than EJS or other rendering template libraries)
  res.render("index", {title: 'Hello', message: 'Please login'})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});

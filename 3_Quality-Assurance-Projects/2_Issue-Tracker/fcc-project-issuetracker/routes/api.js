'use strict';

let mongodb = require('mongodb');
let mongoose = require('mongoose');

let URI = process.env['MONGODB_URI'];

module.exports = function (app) {

  //https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
  /*
  useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. Please remove these options from your code.
  */
  mongoose.connect(URI);

  

  let issueSchema = new mongoose.Schema({
    issue_title: {type: String, required: true},
    issue_text: {type: String, required: true},
    created_by: {type: String, required: true},
    assigned_to: String,
    status_text: String,
    open: {type: Boolean, required: true},
    created_on: {type: String, required: true},
    updated_on: {type: String, required: true},
    project: String
  });

  let Issue = mongoose.model('Issue', issueSchema);
  

  app.route('/api/issues/:project')
  
    .get(function (req, res){
      let project = req.params.project;
      let filterObject = Object.assign(req.query)
      filterObject['project'] =project
      Issue.find(
        filterObject,
        (error, arrayOfResults) => {
          if(!error && arrayOfResults){
            return res.json(arrayOfResults)
          }
        }
      )
    })
    
    .post(function (req, res){
      let project = req.params.project;
      let data = req.body;
      //console.log(data);
      //console.log(project);

      //backend timezone
      /*
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      console.log(timezone); 
      const date = new Date();
      const offset = date.getTimezoneOffset();
      console.log(offset); 
      */

      /*
      by default we setup up open to true to track issue if issue is true it's mean that's still not closed.
      if we don't have value for the opitonal value we set them to '' by default
      toISOString() to have the ISO 8601 date format is as follows: YYYY-MM-DDTHH:mm:ss.sssZ like freecodecamp example see https://stackoverflow.com/questions/12945003/format-date-as-yyyy-mm-ddthhmmss-sssz 
      */
      let newIssue = new Issue({
        issue_title: req.body.issue_title,
        issue_text: req.body.issue_text,
        created_by: req.body.created_by,
        assigned_to: req.body.assigned_to || '',
        status_text: req.body.status_text || '',
        open: true,
        created_on: new Date().toISOString(),
        updated_on: new Date().toISOString(),
        project: project
      })

      newIssue.save((error, savedIssue) => {
        if(!error && savedIssue)
        {
          //remove key that are not show by fcc example
          /*
          savedIssue contain the json element when copy everything we see that the data are contain inside the key "_doc", delete is use to remove the key "__v" for the output user. we can also use https://stackoverflow.com/questions/43478139/mongoose-remove-fields-on-save-that-are-not-present-in-schema but it's specific to mongoose itself.

          this was a try in order to get the test pass but seem like it's just a timezone issue. 
          let savedIssueReturn = { ...savedIssue["_doc"] };
          delete savedIssueReturn.__v;
          res.json(savedIssueReturn);
          */          

          res.json(savedIssue);
        }
        else
        {
          res.json({ error: 'required field(s) missing' });
        }
      })

      
      
    })
    
    .put(function (req, res){
      let project = req.params.project;
      let updateObject = {};
      Object.keys(req.body).forEach((key)=>{
        if(req.body[key]!= '')
        {
          updateObject[key] = req.body[key];
        }
      })
      //console.log(updateObject);
      
      if(updateObject.hasOwnProperty("_id") === false)
      {
        return res.json({ error: 'missing _id' });
      }


      if(Object.keys(updateObject).length < 2)
      {
        return res.json({ error: 'no update field(s) sent', '_id': updateObject["_id"] });
      }

      
      updateObject['updated_on'] = new Date().toISOString();
      //console.log(updateObject);
      Issue.findByIdAndUpdate(
        req.body._id, 
        updateObject, 
        {new: true},
        (error, updatedIssue) => {
          if(!error && updatedIssue)
          {
            return res.json({"result":"successfully updated","_id":req.body._id});
          }
          else
          {
            return res.json({ error: 'could not update', '_id': req.body._id });
          }
          
        })

      
    })
    
    .delete(function (req, res){
      let project = req.params.project;
      if(!req.body._id || req.body.hasOwnProperty("_id") === false){
        return res.json({ error: 'missing _id' })
      }
      Issue.findByIdAndRemove(req.body._id, (error, deletedIssue) => {
        if(!error && deletedIssue){
          res.json({ result: 'successfully deleted', '_id': req.body._id })
        }else if(!deletedIssue){
          res.json({ error: 'could not delete', '_id': req.body._id })
        }
      })
    });
    
};

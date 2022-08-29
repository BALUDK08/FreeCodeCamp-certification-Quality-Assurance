/*
*
*
*       Complete the API routing below
*       
*       
*/

'use strict';

let mongodb = require('mongodb');
let mongoose = require('mongoose');

let URI = process.env['MONGODB_URI'];

module.exports = function (app) {

  mongoose.connect(URI);

  /*
  let commentSchema = new mongoose.SChema({
    message: {type: String, required: true}
  })
  */

  let bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    comments: [String],
    //comments: [commentSchema]
  })

  let Book = mongoose.model('Book', bookSchema);
  //let Comment = mongoose.model('Comment', commentSchema);


  app.route('/api/books')
    .get(function (req, res){
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
      let arrayOfBooks = []
      Book.find({}, (error, results) => {
        if(!error && results)
        {
          results.forEach((result) => {
            let book = result.toJSON();
            book['commentcount'] = book.comments.length
            arrayOfBooks.push(book)
          })
          return res.json(arrayOfBooks)
        }
        
      })
    })
    
    .post(function (req, res){
      let title = req.body.title;
      //response will contain new book object including atleast _id and title
      if(!title)
      {
        return res.json('missing required field title');
      }
      console.log(title)
      let newBook = new Book({
        title: title,
        comments: []
      })
      newBook.save((error, savedBook) => {
				if(!error && savedBook){
					res.json(savedBook)
				}
			})
    })
    
    .delete(function(req, res){
      //if successful response will be 'complete delete successful'
      Book.remove(
				{},
				(error, jsonStatus) => {
					if(!error && jsonStatus){
						return res.json('complete delete successful')
					}
				}
			)
    });



  app.route('/api/books/:id')
    .get(function (req, res){
      let bookid = req.params.id;
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
      Book.findById(
        bookid,
        (error, result) => {
          if(!error && result)
          {
            let book = result.toJSON();
            book['commentcount'] = book.comments.length
            
            return res.json(book)
          }
          else
          {
            return res.json('no book exists');
          }
        }
      )
    })
    
    .post(function(req, res){
      let bookid = req.params.id;
      let comment = req.body.comment;
      //json res format same as .get

      if(comment === '' || !comment)
      {
        return res.json('missing required field comment')
      }

      /*
      let newComment = new Comment({
        message: comment
      }) 
      */
      console.log(comment);
      Book.findByIdAndUpdate(
				bookid,
				//{$push: {comments: newComment}},
        {$push: {comments: comment}},
				{new: true},
				(error, updatedBook) => {
					if(!error && updatedBook){
						return res.json(updatedBook)
					}else if(!updatedBook){
						return res.json('no book exists')
					}
				}
			)
    })
    
    .delete(function(req, res){
      let bookid = req.params.id;
      //if successful response will be 'delete successful'
      Book.findByIdAndDelete(
				bookid,
				(error, deletedBook) => {
					if(!error && deletedBook){
						return res.json('delete successful')
					}else if(!deletedBook){
						return res.json('no book exists')
					}
				}
			)
    });
  
};

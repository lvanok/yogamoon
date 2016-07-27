var bcrypt = require('bcryptjs');
var express = require('express');
var router = express.Router();
var cat = require('../models/yogis.js');
var user = require('../models/user.js');
var connection = require('../config/connection.js');

//this is the users_controller.js file
router.get('/profile/:id', function(req, res){

  var queryString = "select * from users "
  queryString += "left join yoga on yoga.user_id = users.id "
  queryString += "where users.id = " + req.params.id;
  console.log(queryString)
  connection.query(queryString, function(err, userAndYogis) {
      if (err) throw err;

      //uncomment this to see what the data gets returned like
      //res.send(userAndCats)
      res.render('users/show', {userAndCats: userAndCats})

  });
});

router.get('/', function(req,res) {
	res.render('index');
});
router.get('/about', function(req,res) {
	res.render('about');
});
router.get('/contact', function(req,res) {
	res.render('contact');
});
router.get('/createyoga', function(req,res) {
	res.render('createyoga');
});
router.get('/learnabout', function(req,res) {
	res.render('learnabout');
});
router.get('/restore', function(req,res) {
	res.render('/restore');
});
router.get('/videos', function(req,res) {
	res.render('/videos');
});

//sign in stuff

router.get('/users/sign-in', function(req,res) {
	res.render('users/sign_in');
});

router.post('/users/sign-in', function(req,res) {
	res.render('users/sign_in');
});

router.get('/users/new', function(req,res) {
	res.render('users/new');
});
router.post('/users/new', function(req,res) {
	shop.createUser(['uname', 'email', 'password'], 
		[req.body.uname, req.body.email, req.body.password], function(data){
		res.redirect('/users')
	});
});
router.get('/sign-out', function(req,res) {
  req.session.destroy(function(err) {
     res.redirect('/')
  })
});

//if user trys to sign in with the wrong password or email tell them that on the page
router.post('/login', function(req, res) {
	var email = req.body.email;

	var condition = "email = '" + email + "'";

	user.findOne(condition, function(user){

		if (user){
			bcrypt.compare(req.body.password, user.password_hash, function(err, result) {
					if (result == true){

						req.session.logged_in = true;
						req.session.user_id = user.id;
						req.session.user_email = user.email;

						res.redirect('/cats');
					}else{
            res.send('You put in the wrong password.')
          }
			});
		}else{
			res.send('an account with this email does not exist - please sign up')
		}
	});
});

router.post('/create', function(req,res) {
	var queryString = "select * from users where email = '" + req.body.email + "'";

	connection.query(queryString, function(err, users) {
			if (err) throw err;

			if (users.length > 0){

				res.send('we already have an email or username for this account');

			}else{

				bcrypt.genSalt(10, function(err, salt) {
						bcrypt.hash(req.body.password, salt, function(err, hash) {
              user.create(['username', 'email', 'password_hash'], [req.body.username, req.body.email, hash], function(user){

                req.session.username = req.body.username;//we need to grab the username from the form because we don't get it back from MySQL. If we wanted to grab it, then we'd have to do another sql query but it's unnecessary since we already have it here.
                req.session.user_email = req.body.email; //we need to grab the email from the form because we don't get it back from MySQL. If we wanted to grab it, then we'd have to do another sql query but it's unnecessary since we already have it here.
                req.session.logged_in = true;
                req.session.user_id = user.insertId; //the MySQL npm package returns the id of the record inserted with a key of insertId.

                res.redirect('/cats')
            	});

						});
				});

			}
	});
});

module.exports = router;

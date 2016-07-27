/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();

router.get('/yoga', function(req,res) {
	res.sendfile(__dirname + '/public/index.html');
	res.sendfile(__dirname + '/public/contact.html');
	res.sendfile(__dirname + '/public/about.html');
	res.sendfile(__dirname + 'public/yoga_create.html');
	res.sendfile(__dirname + "public/yoga_learn_poses.html");
	res.sendfile(__dirname + 'public/yoga_restore.html');
	res.sendfile(__dirname + 'public/yoga_videos');
});

module.exports = router;
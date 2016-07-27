var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
	console.log('/hello world');
  // res.redirect('/yoga');
});

module.exports = router;

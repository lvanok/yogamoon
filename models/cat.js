// /*
// Here is where you setup a model for how to interface with the database.
// */

// var orm = require('../config/orm.js');

// var cat = {
// 	all: function(cb) {
// 		orm.all('cat', function(res){
// 			cb(res);
// 		});
// 	},
// 	//cols and vals are arrays
// 	create: function(cols, vals, cb) {
// 		orm.create('cat', cols, vals, function(res){
// 			cb(res);
// 		});
// 	},
// 	update: function(objColVals, condition, cb) {
// 		orm.update('cat', objColVals, condition, function(res){
// 			cb(res);
// 		});
// 	},
// 	delete: function(condition, cb){
// 		orm.delete('cat', condition, function(res){
// 			cb(res);
// 		});
// 	}
// };

// module.exports = cat;
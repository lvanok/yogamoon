/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var yogis = {
	all: function(cb) {
		orm.all('yogis', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	create: function(cols, vals, cb) {
		orm.create('yogis', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update('yogis', objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb){
		orm.delete('yogis', condition, function(res){
			cb(res);
		});
	}
};

module.exports = yogis;

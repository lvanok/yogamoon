 /*
Here is where you set up your server file.
express middleware.
*/
var cookieParser = require('cookie-parser');
var session = require('express-session');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();

// Database setup
var Sequelize = require('sequelize'),
		connection;
		console.log(process.env.JAWSDB_URL);
if (process.env.JAWSDB_URL) {
	connection = new Sequelize(process.env.JAWSDB_URL);
} else {
	connection = new Sequelize('yoga', 'root', '', {
		host: 'localhost',
		dialect: 'mysql',
		port: '3306'
	})
}

//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 60000 }}));
app.use(cookieParser());

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var application_controller = require('./controllers/application_controller.js');
// var cats_controller = require('./controllers/cats_controller.js');
var users_controller = require('./controllers/users_controller.js');
var yoga_controller = require('./controllers/yoga_controller.js');

app.use('/', application_controller);

app.use('/', users_controller);
app.use('/', yoga_controller);

// //get route
// app.get('/', function(req,res) {
//     //mySQL commands
//     connection.query('SELECT * FROM yogis;', function(err, data) {
//       if (err) throw err;
//       console.log('The solution is: ', data);
//             res.send(data);
//       res.render('index', {yogis: data});
//     });
// });

// app.post('')
// app.get('/about', function(req,res) {
// });
// app.get('/contact', function(req,res) {
// });
// app.get('/index', function(req, res) {
// });
// app.get('/createyoga', function(req, res) {
// });
// app.get('/learnabout', function(req, res) {
// });
// app.get('/restore', function(req, res) {
// });
// app.get('/videos', function(req, res) {
// });
// app.get('/new', function(req, res) {
// });
// app.post('/new', function(req, res) {	
// });

var port = process.env.port || 3000
app.listen(port, function(){
	console.log('listening on PORT', port);
});


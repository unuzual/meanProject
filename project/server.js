//server.js

// Depêndencias gerais da aplicação ==============================================================
var express  = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var sessionOptions = {
	  secret: "secret",
	  resave : true,
	  saveUninitialized : false
	};
	
app.use(session(sessionOptions));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(methodOverride('X-HTTP-Method-Override'));


//Dependências Banco de Dados =====================================================================
var db = require('./config/db');
var mongoose = require('mongoose');
mongoose.connect(db.url);

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

require('./app/route')(app);

app.listen(port);

console.log('Acesse localhost:' + port + '/api para ver sua aplicação!');

exports = module.exports = app;
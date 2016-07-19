var express = require('express');
var path = require('path');
// var bodyParser = require('body-parser');
var app = express(); 
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync(__dirname + '/public/data/employeeData.json', 'utf8'));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req,res){
		res.render('employee-list',
	  { data: obj }
  );
});

app.get('/employees', function(req,res){
	res.render('employee-list',
	  { data: obj }
  );
});

app.get('/employees/:id', function(req,res){
	res.render('employee-info',
	  { title : req.params.id,
	    data: obj }
  );
});

app.get('/contact-info', function(req,res){
		res.render('contact-info',
	  { data: obj }
  );
});

app.listen(3000, function(){
	console.log("Listening on Port 3000");
});
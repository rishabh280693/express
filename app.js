var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('<h1>Hello World!</h1>');
});

app.get('/users', function(req,res){
	res.send('<h1>Hello User!</h1>');
});

app.get('/rishabh', function(req,res){
	res.send('<h1>Hello Rishabh!</h1>');
});

app.listen(3000, function(){
	console.log("Listening on Port 3000");
});
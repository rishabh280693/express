var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express(); //express is just a function

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//use middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var toDoItems = [
	{ id: 1, desc: 'foo'},
	{ id: 2, desc: 'bar'},
	{ id: 3, desc: 'foobar'}
];

//configure routes
//req: request object
//res: response object
app.get('/', function(req,res){
	//res.send('<h1>Hello World!</h1>');
	res.render('index',{
		title: 'My App',
		items: toDoItems
	});
});

app.post('/add', function(req,res){
	var newItem = req.body.newItem;

	toDoItems.push({
		id:toDoItems.length + 1,
		desc: newItem
	});

	res.redirect('/');
});

app.get('/users', function(req,res){
	res.send('<h1>Hello User!</h1>');
});

app.get('/rishabh', function(req,res){
	res.send('<h1>Hello Rishabh!</h1>');
});


app.get('/api/user/:id', function(req,res){
	var userid = req.params.id;
	//alert(userid);
	res.send('<h1>' + userid + '</h1>');
});

//listen on port 3000, same as node's create ttp server
app.listen(3000, function(){
	console.log("Listening on Port 3000");
});
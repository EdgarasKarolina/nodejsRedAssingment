//requiring express module
var express = require('express');
var app = express();

//requiring file system module
var fs = require('fs');

//setting view engine
app.set('view engine', 'ejs');

//here index.ejs page will be rendered
app.get('/', function(req, res)
{
	var object = {
		title : 'Home',
		subtitle : 'Homepage for the mandatory assingment',
		paragraphtext : 'This is some text i put in here'
	}

	//this will render view and object
	res.render('index', object);
});


//this page will be rendered when enter /about to URL
app.get('/about', function(req, res)
{
	//reading from JSON file
	fs.readFile('about.json', 'utf-8', function(err, data)
	{
		if (err) {
			throw err;
			console.log(err);
			console.log('An error occured');
		}
		res.render('about', JSON.parse(data));
	});
})

//app will be listening at this port
app.listen(3000);
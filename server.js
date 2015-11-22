var express	= require('express');
var routes	= require('./routes');
var http	= require('http');
var path	= require('path');

var app		= module.exports = express();


// express configuration

app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '/public')));

// routes

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


// start server

http.createServer(app).listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});

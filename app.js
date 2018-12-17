var express        = require('express'),
    app            = express(),
    port           = process.env.PORT || 3000;

//  requiring routes
var indexRoute    = require('./routes/index'),
    projectRoute  = require('./routes/project');

//  SETUP
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

//  requiring routes
app.use('/', indexRoute);
app.use('/project/', projectRoute);

//  if page not found
app.get('*', function(req, res){
  res.send('ERROR 404 (PAGE NOT FOUND)');
});

app.listen(port, process.env.IP, function(){
  console.log('Server is running at port: ' + port);
});

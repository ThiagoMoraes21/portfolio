let express    = require('express'),
    mongoose   = require('mongoose'),
    seedDB     = require('./seeds'),
    bodyParser = require('body-parser'),
    app        = express(),
    port       = process.env.PORT || 3000;

//  requiring routes
let indexRoute   = require('./routes/index'),
    projectRoute = require('./routes/projects');

//===========
//  SETUP
//===========
//  Connecting to mongoDB
mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true });

//  Setup body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  Static folder and view engine
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//  defining routes
app.use('/', indexRoute);
app.use('/project', projectRoute);

// Create projects in the DB
// seedDB();

//  If page not found
app.get('*', function(req, res){
  res.send('ERROR 404 (PAGE NOT FOUND)');
});

app.listen(port, process.env.IP, function(){
  console.log('Server is running at port: ' + port);
});

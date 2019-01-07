let express    = require('express'),
    mongoose   = require('mongoose'),
    seedDB     = require('./seeds'),
    bodyParser = require('body-parser'),
    flash      = require('connect-flash'),

    app        = express(),
    port       = process.env.PORT || 3000;

//  requiring routes
let indexRoute   = require('./routes/index'),
    projectRoute = require('./routes/projects');

//===========
//  SETUP
//===========
async function runTransactionWithRetry(txnFunc, client, session) {
  try {
    await txnFunc(client, session);
  } catch (error) {
    console.log('Transaction aborted. Caught exception during transaction.');

    // If transient error, retry the whole transaction
    if (error.errorLabels && error.errorLabels.indexOf('TransientTransactionError') >= 0) {
      console.log('TransientTransactionError, retrying transaction ...');
      await runTransactionWithRetry(txnFunc, client, session);
    } else {
      throw error;
    }
  }
}
mongoose.Promise = global.Promise;
//  Connecting to mongoDB
// mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true });
mongoose.connect('mongodb://thiago:323Sowhat@ds151354.mlab.com:51354/portfolio', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Success");
});
//  Setup body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  Static folder and view engine
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//  Setup express-session and flash
app.use(flash());
app.use(require('express-session')({
  secret: 'Bob is the best dog of the world!',
  resave: false,
  saveUninitialized: false
}));
app.use(function(req, res, next){
  res.locals.error =  req.flash('error');
  res.locals.success =  req.flash('success');
  next();
});

//  defining routes
app.use('/', indexRoute);
app.use('/project', projectRoute);

// Create projects in the DB
// seedDB();

//  If page not found
app.get('*', function(req, res){
  res.render('notfound');
});

app.listen(port, process.env.IP, function(){
  console.log('Server is running at port: ' + port);
});

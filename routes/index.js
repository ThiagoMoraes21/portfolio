var express = require('express'),
    router   = express.Router();


router.get('/', function(req, res){
  res.render('main');
});

module.exports = router;

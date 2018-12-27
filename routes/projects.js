var express  = require('express'),
    router   = express.Router(),
    Project = require('../models/project');

router.get('/:id', function(req, res){
  Project.findById(req.params.id).exec(function(err, foundProject){
    if (err) {
      console.log('Error trying to find the project: ' + err);
    } else {
      res.render('project', {project: foundProject});
    }
  });
});

module.exports = router;

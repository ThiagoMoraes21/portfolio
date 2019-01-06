var express  = require('express'),
    router   = express.Router(),
    Project = require('../models/project');

router.get('/:id', function(req, res){
  Project.findById(req.params.id).exec(function(err, foundProject){
    if (err) {
      req.flash('error', 'Ops! Não encontrei este projeto...');
      return res.redirect('back');
    } else {
      res.render('project', {project: foundProject});
    }
  });
});

module.exports = router;

var express = require('express'),
    router   = express.Router(),
    mongoose = require('mongoose'),
    Project = require('../models/project');

// INDEX - Mostra todos os projetos
router.get('/', function(req, res){
  Project.find({}, function(err, allProjects){
    if (err) {
      // HANDLE THIS LATTER
      console.log('Error trying to find the projects: ' + err);
    } else {
      res.render('main', {projects: allProjects});
    }
  });
});

module.exports = router;

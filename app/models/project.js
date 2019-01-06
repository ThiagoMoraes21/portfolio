var mongoose = require('mongoose');

//  SETUP SCHEMA
var projectSchema = new mongoose.Schema({
  title: String,
  image: String,
  about: String,
  summary: String,
  technologies: [String],
  siteLink: String,
  githubLink: String
});

//  Cria um Schema de cada projeto no BD
module.exports = mongoose.model('Project', projectSchema);

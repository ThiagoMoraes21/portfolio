var mongoose = require('mongoose'),
    Project  = require('./models/project');


var data = [
  {
    title: 'YelpCamp',
    image: '../img/projects/yelpcamp.png',
    summary: 'YelpCamp é um web-app onde você pode encontrar campings no mundo todo e muito mais!',
    technologies: ['HTML5+CSS3', 'Javascript', 'Bootstrap', 'MongoDB', 'NodeJS', 'Express'],
    githubLink: 'https://github.com/ThiagoMoraes21/WebDev_BootCamp/tree/master/Projects/YelpCamp',
    about: `There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                  as necessary, making this the first true generator on the Internet.`
  }
];


function seedDB(){
  // remove all projects
  Project.remove({}, function(err){
    if (err) {
      console.log('Error trying to remove the projects: ' + err);
    }
    console.log('PROJECTS REMOVED!');

    // Add projects back
    data.forEach(function(seed){
      Project.create(seed, function(err, project){
        if (err) {
          console.log('Error trying to create project: ' + err);
        } else {
          console.log('Project created successfully!');
        }
      });
    });

  });
}

module.exports = seedDB;

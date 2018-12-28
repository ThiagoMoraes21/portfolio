var mongoose = require('mongoose'),
    Project  = require('./models/project');


var data = [
  {
    title: 'YelpCamp',
    image: '../img/projects/yelpcamp.png',
    summary: 'YelpCamp é um web-app onde você pode encontrar campings no mundo todo e muito mais!',
    technologies: ['HTML5+CSS3', 'Javascript', 'Bootstrap 3', 'MongoDB', 'NodeJS', 'Express'],
    githubLink: 'https://github.com/ThiagoMoraes21/WebDev_BootCamp/tree/master/Projects/YelpCamp',
    about: `There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                  as necessary, making this the first true generator on the Internet.`
  },  {
      title: 'Tech Blog',
      image: 'https://source.unsplash.com/ZN97BfWuHhs',
      summary: 'Estudo aplicando a nova versão do Bootstrap, site sobre o museu de doces!',
      technologies: ['Bootstrap 4', 'HTML5+CSS3', 'Javascript', 'NodeJS', 'Express', 'REST Patner'],
      githubLink: 'https://github.com/ThiagoMoraes21/WebDev_BootCamp/tree/master/Projects/Blog',
      about: `There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need to be sure
                    there isn't anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                    as necessary, making this the first true generator on the Internet.`
    }, {
    title: 'CRM Solutions',
    image: '../img/projects/bg_5.jpg',
    summary: 'Web-app que centraliza a comunicação de times dentro de uma empresa!',
    technologies: ['Java', 'Spring Boot', 'HTML5+CSS3', 'Javascript', 'Web Sockets', 'Bootstrap 3'],
    githubLink: 'https://github.com/ThiagoMoraes21/PI_3_Semestre',
    about: `There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                  as necessary, making this the first true generator on the Internet.`
  }, {
    title: 'Candy Museum',
    image: 'https://source.unsplash.com/pVPXeT7rIu0',
    summary: 'Estudo aplicando a nova versão do Bootstrap, site sobre o museu de doces!',
    technologies: ['Bootstrap 4', 'HTML5+CSS3', 'Javascript', 'NodeJS'],
    githubLink: 'https://github.com/ThiagoMoraes21/WebDev_BootCamp/tree/master/Code/Bootstrap4_Code/13_Museum_Of_Candy',
    about: `There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                  as necessary, making this the first true generator on the Internet.`
  }, {
    title: 'Black Bird',
    image: '../img/projects/blackbird.png',
    summary: 'Estudo aplicando efeitos parallax em um site de roupas masculinas.',
    technologies: ['HTML5+CSS3', 'Javascript', 'Jquery', 'Bootstrap 3', 'NodeJS', 'Express'],
    githubLink: 'https://github.com/ThiagoMoraes21/Projects/tree/master/Parallax_Zooming',
    about: `There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                  as necessary, making this the first true generator on the Internet.`
  }, {
    title: 'To-do List',
    image: '../img/projects/todolist.jpg',
    summary: 'Simples app de to-do list, estudo de multiplas interações com javascript.',
    technologies: ['HTML5+CSS3', 'Javascript', 'Jquery', 'Bootstrap 3'],
    githubLink: 'https://github.com/ThiagoMoraes21/WebDev_BootCamp/tree/master/Projects/ToDo_List',
    about: `There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                  as necessary, making this the first true generator on the Internet.`
  },
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

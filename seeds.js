var mongoose = require('mongoose'),
    Project  = require('./models/project');


var data = [
  {
    title: 'YelpCamp',
    image: '../img/projects/yelpcamp.png',
    summary: 'YelpCamp é um web-app onde você pode encontrar campings no mundo todo e muito mais!',
    technologies: ['HTML5+CSS3', 'Javascript', 'Bootstrap 3', 'MongoDB', 'NodeJS', 'Express'],
    githubLink: 'https://github.com/ThiagoMoraes21/WebDev_BootCamp/tree/master/Projects/YelpCamp',
    about: `Este é um dos projetos propostos no <a class="text-dark" href="https://www.udemy.com/the-web-developer-bootcamp/">The Web Developer Boot Camp</a>.
     E se trata de um Web App no qual o usuário pode postar, avaliar e comentar Campings espalhado pelo mundo.<br><br> O site utiliza autenticação via
     <a class="text-dark" href="http://www.passportjs.org/">Passaport js</a> para cadastro e login de usuários.
	   Também foi implementado <a class="text-dark" href="https://www.npmjs.com/package/flash-message">Flash</a> para lidar com possíveis erros no servidor.
     O servidor foi implementado usando <strong>NodeJS</strong> e <strong>Express</strong> bem como <strong>MongoDB</strong> para armazenar os dados produzidos pelos usuários.
     <br><br>
     	O site segue o padrão RESTful e faz uso do ciclo <a class="text-dark" href="https://www.codecademy.com/articles/what-is-crud">CRUD</a>
      como modelo de armazenamento persistente (data persistence) do sistema.
      Também foi utilizando o toolkit Gulp para otimização e automatização de tarefas do app.`
  },
  {
      title: 'Anything Blog',
      image: '../img/projects/blog.jpg',
      summary: 'Web App onde o usuário pode criar e editar artigos sobre temas variádos!',
      technologies: ['Semantic UI', 'HTML5+CSS3', 'Javascript', 'NodeJS', 'Express', 'REST Pattern'],
      githubLink: 'https://github.com/ThiagoMoraes21/WebDev_BootCamp/tree/master/Projects/Blog',
      about: `RESTful web-app que implementa as funcionalidades fundamentais de um Blog.
       Este também é um dos projetos propostos no  <a class="text-dark" href="https://www.udemy.com/the-web-developer-bootcamp/">The Web Developer Boot Camp</a>.
       <br><br>
	     Inspirado no <a class="text-dark" href="https://medium.com/">Medium</a> o app permite que
       qualquer usuário possa escrever artigos sobre temas variados. Foram implementadas as funcionalidades
       básicas de um blog, utilizando o ciclo <a class="text-dark" href="https://www.codecademy.com/articles/what-is-crud">CRUD</a> para persistência de dados,
       então o usuário é capaz de criar, ler, editar ou deletar artigos.
       <br><br>
	     O app está na sua primeira versão. Por tanto, haverão mudanças em todas as partes do aplicativo.
       Novas funcionalidades serão implantadas, como um sistema de likes e uma sessão de comentários.
       Também irei adicionar um sistema de autenticação para poder cadastrar novos usuários no sistema e,
       com isto, associar as interações de um usuário à uma conta.`
    },
    {
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
  },
  {
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
  },
  {
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
  },
  {
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

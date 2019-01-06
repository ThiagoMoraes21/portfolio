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
     E se trata de um Web App no qual o usuário pode postar, avaliar e comentar Campings espalhado pelo mundo.
     <br><br>
     O site utiliza autenticação via <a class="text-dark" href="http://www.passportjs.org/">Passaport js</a> para cadastro e login de usuários.
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
    title: 'ERP Solutions',
    image: '../img/projects/teamwork.svg',
    summary: 'Web-app que centraliza a comunicação de times dentro de uma empresa!',
    technologies: ['Java', 'Spring Boot', 'HTML5+CSS3', 'Javascript', 'Web Sockets', 'Bootstrap 3'],
    githubLink: 'https://github.com/ThiagoMoraes21/PI_3_Semestre',
    about: `Como projeto integrado do 3º Semestre da faculdade, escolhi fazer um software de ERP (Enterprise Resource Planning).
    Pois, além de poder praticar o padrão REST em uma aplicação web, eu poderia aprender um pouco sobre <a class="text-dark" href="https://en.wikipedia.org/wiki/WebSocket">WebSockets</a>.
    <br><br>
    Utilizei como referência principal para construção do site este <a class="text-dark" href="https://www.callicoder.com/spring-boot-websocket-chat-example/">artigo</a> escrito por <strong>Rajeev Kumar Singh</strong>
    em seu blog. No post Rajeev demostra como implementar de forma simples um servidor WebSocket utilizando <strong>Java</strong> e <a class="text-dark" href="http://spring.io/">Spring Boot</a>.
    E para estabelicer a comunicação entre o client-side e o servidor, a aplicação usa as bibliotecas <a class="text-dark" href="https://github.com/sockjs">SockJS</a> e <a class="text-dark" href="https://github.com/jmesnil/stomp-websocket">Stomp js</a>.
    <br><br>
    Baseado na funcionalidade principal do app, fui capaz de adaptar o servidor para criar uma dashboard onde os usuários podem criar tarefas em uma To-do list.`
  },
  {
    title: 'Candy Museum',
    image: 'https://source.unsplash.com/pVPXeT7rIu0',
    summary: 'Web site sobre um museu de doces, estudo sobre as novas funcionalidade do Bootstrap 4!',
    technologies: ['Bootstrap 4', 'HTML5+CSS3', 'Javascript', 'NodeJS', 'Express', 'Gulp'],
    githubLink: 'https://github.com/ThiagoMoraes21/WebDev_BootCamp/tree/master/Code/Bootstrap4_Code/13_Museum_Of_Candy',
    about: `Web site responsivo sobre um museu de doces. Esse projeto, proposto no <a class="text-dark" href=https://www.udemy.com/the-web-developer-bootcamp/">The Web Developer Boot Camp</a>,
    tem como objetivo demonstrar as principais mudanças trazidas na versão 4 do Bootstrap.
    <br><br>
    Nesta nova versão do Bootstrap temos como principal alteração do framework a migração de seus componentes
    e utilitários para o Flexbox. O projeto também implementa algumas funcionalidades novas em javascript
    fazendo uso dos plugins oferecidos pelo framework.
    <br><br>
    O design do projeto foi feito utilizando a plataforma <a class="text-dark" href="http://figma.com">Figma</a> e seu deploy foi feito na
    plataforma <a class="text-dark" href="https://www.heroku.com/">Heroku</a>. No back-end utilizei NodeJs e Express para lidar com os https requests tornando o
    site dinâmico. O toolkit Gulp foi usado para otimização das imagens e scripts.`
  },
  {
    title: 'Black Bird',
    image: '../img/projects/blackbird.png',
    summary: 'Estudo aplicando efeitos parallax em um site de roupas masculinas.',
    technologies: ['HTML5+CSS3', 'Javascript', 'Jquery', 'Semantic UI', 'NodeJS', 'Express'],
    githubLink: 'https://github.com/ThiagoMoraes21/Projects/tree/master/Parallax_Zooming',
    about: `Uma adaptação de um projeto proposto na série de videos <strong>Parallax on The Web</strong> produzido pelo canal
    <a class="text-dark" href="https://www.youtube.com/channel/UCyIe-61Y8C4_o-zZCtO4ETQ">DevTips</a>. A proposta da série é aplicar de forma prática
    efeitos parallax de diferentes maneiras em uma aplicação web.
    <br><br>
    Adaptei o projeto para que fosse um site real e, para isso, utilizei o <a class="text-dark" href="https://semantic-ui.com/">Semantic UI</a> para
    fazer a interface responsiva e dinâmica. Também utilizei NodeJS e Express, como sempre, para fazer o back-end do site. Para o design, a plataforma
    <a class="text-dark" href="https://www.figma.com/">Figma</a> foi utilizada para fazer os mockups e protótipos do projeto.
    <br><br>
    Esse projeto serviu para ganhar a compreensão de como um mesmo efeito pode ser implementado de diferentes formas dentro de uma aplicação.
    E, para uma próxima versão desse projeto, pretendo utilizar o <strong>AJAX</strong> para carregar o conteúdo do banco de dados dinamicamente na página.
    O deploy do site foi feito usando a plataforma <a class="text-dark" href="https://www.heroku.com/">Heroku</a>.`
  },
  {
    title: 'To-do List',
    image: '../img/projects/todolist.svg',
    summary: 'Simples app de to-do list, estudo de multiplas interações com javascript.',
    technologies: ['HTML5+CSS3', 'Javascript', 'Jquery', 'Bootstrap 3', 'Gulp'],
    githubLink: 'https://github.com/ThiagoMoraes21/WebDev_BootCamp/tree/master/Projects/ToDo_List',
    about: ` Clássico app de estudo, esse é mais um dos projetos propostos no <a class="text-dark" href="https://www.udemy.com/the-web-developer-bootcamp/">The Web Developer Boot Camp</a>.
    Apesar de ser um dos projetos iniciais do curso, decidi coloca-lo na minha lista de projetos porque o app reúne uma série de técnicas e interação interessantes.
    <br><br>
    O objetivo deste projeto foi entender como funciona a manipulação do <strong>DOM</strong> utilizando <strong>jQuery</strong>.
    O app é relativamente robusto para uma aplicação apresentada a iniciantes, pois faz uso de conceitos como responsividade de um site,
    animações e efeitos com <strong>CSS</strong>. E serviu para refinar um pouco mais os meus conhecimentos sobre interfaces.
    <br><br>
    Também utilizei a toolkit <a class="text-dark" href="https://gulpjs.com/">Gulp</a>. para aprender os conceitos básicos da ferramenta e como otimizar e automatizar tarefas rotineiras de uma aplicação.`
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

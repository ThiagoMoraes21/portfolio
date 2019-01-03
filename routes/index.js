const express    = require('express'),
    router     = express.Router(),
    mongoose   = require('mongoose'),
    Project    = require('../models/project'),
    nodemailer = require('nodemailer');

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

//  Send message to my e-mail
router.post('/', function(req, res){
  let output = `
    <p>NOVA MENSAGEM DO PORTFOLIO!</p>
    <h4>Detalhes do contato</h4>
    <ul>
      <li>Nome: ${req.body.name}</li>
      <li>E-mail: ${req.body.email}</li>
    </ul>
    <h3>Mensagem</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'portfolio-message@outlook.com', // generated ethereal user
        pass: '323@Sowhatthiago!' // generated ethereal password
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"PORTFOLIO" <portfolio-message@outlook.com>', // sender address
    to: 'thiago4x70@gmail.com', // list of receivers
    subject: 'Mensagem do portfolio', // Subject line
    text: 'portfolio...', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.redirect('/');
  });
});

module.exports = router;

const express    = require('express'),
    router     = express.Router(),
    mongoose   = require('mongoose'),
    Project    = require('../models/project'),
    nodemailer = require('nodemailer'),
    user       = process.env.USER,
    pass       = process.env.PASS;

// INDEX - Mostra todos os projetos
router.get('/', function(req, res){
  Project.find({}, function(err, allProjects){
    if (err) {
      req.flash('error', 'Ops! Os projetos não foram encontrados...');
      return res.redirect('/');
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
        user: user, // generated ethereal user
        pass: pass // generated ethereal password
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
        req.flash('error', 'Ops! Algo deu errado...Por favor, tente novamente :)');
        return res.redirect('back');
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      req.flash('success', 'Yeah! Mensagem enviada com sucesso :)');
      res.redirect('/');
  });
});

module.exports = router;

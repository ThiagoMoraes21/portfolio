//  Setuping typeit
new TypeIt('.type-it', {
  strings: ['Web', 'Front-End', 'Back-End'],
  cursorSpeed: 1200,
  speed: 150,
  deleteSpeed: 50,
  nextStringDelay: [650, 1200],
  autoStart: false,
  breakLines: false,
  loop: true
});


// Add a event listener to NAVBAR
$('#navbarLinks a').click(function(){
  $('#navbarLinks a').each(function(){
    this.classList.remove('active');
  });
  this.classList.add('active');
});

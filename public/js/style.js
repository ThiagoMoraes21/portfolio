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


// Navbar active class change when a nav link is clicked
$('#navbarLinks a').click(function(){
  $('#navbarLinks a').each(function(){
    //  remove all active class from nav elements
    this.classList.remove('active');
  });
  //  add active class to the one clicked
  this.classList.add('active');
});

//  Add active class on scroll
$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop()+52;

		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('#navbarLinks a.active').removeClass('active');
						$('#navbarLinks a').eq(i).addClass('active');
				}
		});
}).scroll();

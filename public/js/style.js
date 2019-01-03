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

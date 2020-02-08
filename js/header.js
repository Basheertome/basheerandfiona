$(document).ready(function(){
	$('.menu-button').click(function(event) {
		event.preventDefault();
		$('.header').toggleClass('active');
		$('html, body').animate({scrollTop: "0"}, 250);
	});
});

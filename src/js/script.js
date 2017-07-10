$( document ).ready(function() {

	$('.page-wrapper').fadeIn(350);

	$('a').click(function(e) {
		e.preventDefault();
		$('.page-wrapper').fadeOut(350);
		window.location = $(this).attr('href');
	})

});

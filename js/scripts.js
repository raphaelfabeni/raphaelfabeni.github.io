$(document).ready(function() {
	// social networks
	var socialItem = $('#social li');
	socialItem.hover(function() {
		$(this).siblings('li').stop().animate({
			opacity: 0.25
		}, 'slow');
	}, function() {
		$(this).siblings('li').stop().animate({
			opacity: 1.0
		}, 'fast');
	});

});
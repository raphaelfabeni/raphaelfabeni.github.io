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

	//city
	function callCity() {
		$('<div></div>', {
				"class": 'city'
			}).prependTo( $('body') );
		$('.city').fadeIn('slow');
	}

	function destroyCity() {
		$('.city').fadeOut('slow', function() {
    		$(this).remove();
  		});
	}

	var botao = $('.button .btn');
	botao.click(function(event){
		event.preventDefault();
		if($(this).hasClass('active')) {
			destroyCity();
			$(this).removeClass('active');
			$('body').removeClass('on');
		} else {
			callCity();
			$(this).addClass('active');
			$('body').addClass('on');
		}
	});

	//IE
	if ($.browser.msie) {
		alert('aeee');
    if(parseInt($.browser.version) == 8){
         alert('8');
    } else if (parseInt($.browser.version) == 7){
         alert('7');
    }
}

});
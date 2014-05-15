$(document).ready(function() {
   // social networks
   var socialItem = $('#social li');
   socialItem.hover(function() {
      $(this).siblings('li').stop().animate({
         opacity: 0.25
      }, 'fast');
   }, function() {
      $(this).siblings('li').stop().animate({
         opacity: 1.0
      }, 'fast');
   });

   // city
   function callCity() {
      $('.city').animate({
         opacity: 1
      }, 'slow');
   }

   function destroyCity() {
      $('.city').animate({
         opacity: 0
      }, 'slow');
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

   // IE
   if( $('html').hasClass('ie8') || $('html').hasClass('ie7') ) {
      function alertBrowser() {
         $('<div>', {
            "class": "alert"
         }).appendTo('body');
         $('<p>', {
            "text": "You're using a browser which does not support all features of this website. Update it or try browsers as Chrome or Firefox!"
         }).appendTo('.alert');
         $('<a>', {
            "text": "X",
            "class": "close"
         }).appendTo('.alert');

         $('.close').click(function(event){
            event.preventDefault();
            $(this).closest('.alert').fadeOut('slow', function() {
               $(this).remove();
            });
         });
      }
      alertBrowser();
   }

});
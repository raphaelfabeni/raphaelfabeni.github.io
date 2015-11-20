$(document).on('ready', function() {  
  var winHeight   = $(window).height(), 
      docHeight   = $('.main-posts').height(),
      progressBar = $('progress'),
      max, value;

  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
    value = $(window).scrollTop();
    progressBar.attr('value', value);
  });
});

/** code by webdevtrick ( https://webdevtrick.com ) **/
(function($) {
  $(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
     

      $(this).siblings('.nav-dropdown').toggle();
 
          $('.dropdown').not($(this).siblings()).hide();
          
          e.stopPropagation();


          
    });

    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);



$("#price_chackbox").change(function() {
  if(this.checked) {
    $('#yearlly').css('display', 'none');
    
$('#mothlly').css('display', 'flex');
    

    // $('.afterinput').addClass('text-success');
    // $('.beforeinput').removeClass('text-success');
    
  } else {
    $('#yearlly').css('display', 'flex');

    $('#mothlly').css('display', 'none');

    // $('.afterinput').removeClass('text-success');
    // $('.beforeinput').addClass('text-success');
}
});
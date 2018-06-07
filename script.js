$(document).ready(function(){
	//CHANGE ACTIVE MENU ON SCROOL
    $('body').scrollspy({target: ".navbar", offset: 50});
	
	
//CHANGE BACKGROUND ON SCROOL
var header = $("#nav1");
var logo = $("#log1");
$(function() {
    //caches a jQuery object containing the header element
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 40) { //620
            header.addClass("nav_pozadina");
			logo.removeClass("vel");
        } else {
            header.removeClass("nav_pozadina");
			logo.addClass("vel");
        }
		
    });
	
});

//MAKE RESERVATION

$(".form_input").focus(function(){
       $(this).parent().addClass("special");

  }).blur(function(){
       $(this).parent().removeClass("special");
  })


//CHANGE BACKGROUND ON MENU SHOW / HIDE
$(".navbar").on("show.bs.collapse", function() {
	header.addClass("nav_pozadina");
});

$(".navbar").on("hide.bs.collapse", function() {
 
	header.removeClass("nav_pozadina");
});


});


//smooth scrooll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a")
  	.not(".non")
  	.on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});






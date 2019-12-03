//
$(document).ready(function () {
	'use strict';
	$(window).scroll(function() {
		var navbar = $('.navbar');
		// if condation
		// condation ? true : false
		$(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
	});
	// Deal with Tabs Section
	$('.tab-switch li').click(function () {
		//Add Selected Class To Active Link
		$(this).addClass('Active').siblings().removeClass('Active');
		//Hide All Dive
		$('.tabs-section .tabs-content > div').hide();
		// Show Div Content With This Link
		$('.'+ $(this).data('class')).show();
	});

	// Trigger Nice Scroll Plugin
    $('html').niceScroll( {
        cursorcolor:'#4d80e4',
        cursorwidth : 10,
        cursorborderradius:0,
        cursorborder:'1px solid #4d80e4'
    });

    // Button Scroll Top
    var scroll_btn = $('#scrollTop');
    $(window).scroll(function () {
        if ( $(this).scrollTop() > 100)
        {
           scroll_btn.fadeIn();
        }
        else
        {
           scroll_btn.fadeOut();
        }
    });
    scroll_btn.on('click', function(){
        $('html , body').animate ({scrollTop : 0} , 2500);
    });

     // Scroll To Header
     $('.navbar .Maxit ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('header').offset().top
         },1800);
     });

     // Scroll To Awsome Section
     $('.navbar .Features ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('.awsome').offset().top
         },1800);
     });

     // Scroll To Social Section
     $('.navbar .About ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('.social-section').offset().top
         },1800);
     });

	// Scroll To Pricing Section
     $('.navbar .Pricing ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('.pricing').offset().top
         },1800);
     });

     // Scroll To Testimonials Section
     $('.navbar .Reviews ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('.testimonials').offset().top
         },2000);
     });

     // Scroll To Contact US Section
     $('.navbar .Contact ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('.contact-us').offset().top
         },1800);
     });
});   

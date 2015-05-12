jQuery(document).ready(function($){
var $the_what_block = $('.the-what-block');

	//hide timeline blocks which are outside the viewport
	$the_what_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.the-what-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$the_what_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.the-what-content').hasClass('is-hidden') ) {
	$(this).find('.the-what-content').removeClass('is-hidden').addClass('bounce-in2'); 
			
			}
		});
	});
});
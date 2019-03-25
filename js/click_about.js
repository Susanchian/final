//JS click
$(function(){
	$('.arrow').click(function(){ 
		$('html,body').animate({scrollTop:$('#swiper').offset().top}, 800); 
	});
});
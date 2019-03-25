//JS click
$(function(){
	$('.arrow').click(function(){ 
		$('html,body').animate({scrollTop:$('#information').offset().top}, 800); 
	});
});
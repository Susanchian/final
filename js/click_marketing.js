//JS click
$(function(){
	$('.arrow').click(function(){ 
		$('html,body').animate({scrollTop:$('#imgbox0').offset().top}, 800); 
	});
});
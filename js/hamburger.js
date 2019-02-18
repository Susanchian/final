// Javascript Document

//漢堡選單
$(document).ready(function(){
	
	$(window).resize(function(){
		location.reload();
	});//偵測螢幕現在的寬度，去對應css
	
	$(".menu").click(function(){
		
		$("nav").slideToggle();
	});
});
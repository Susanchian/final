//JS click
$(function(){
	$('.btn_top').click(function(){ 
		$('html,body').animate({scrollTop:$('#btn_ocean').offset().top}, 800); 
	}); //代表一個完整的執行區塊
	
	$('.arrow').click(function(){ 
		$('html,body').animate({scrollTop:$('#works').offset().top}, 800); 
	});
	
	$('#ocean_btn').click(function(){ 
		$('html,body').animate({scrollTop:$('#ocean').offset().top}, 800); 
	}); 
	
	$('#life_btn').click(function(){ 
		$('html,body').animate({scrollTop:$('#life').offset().top}, 900); 
	}); 
	
	$('#say_btn').click(function(){ 
		$('html,body').animate({scrollTop:$('#say').offset().top}, 1000); 
	}); 

	$('#food_btn').click(function(){ 
		$('html,body').animate({scrollTop:$('#food').offset().top}, 1100); 
	}); 

	$('#meme_btn').click(function(){ 
		$('html,body').animate({scrollTop:$('#meme').offset().top}, 1200); 
	}); 

	$('#lines_btn').click(function(){ 
		$('html,body').animate({scrollTop:$('#lines').offset().top}, 1200); 
	}); 
	
	$('#vr_btn').click(function(){ 
		$('html,body').animate({scrollTop:$('#vr').offset().top}, 1200); 
	}); 

	$('#spinning_btn').click(function(){ 
		$('html,body').animate({scrollTop:$('#spinning').offset().top}, 1200); 
	}); 

	$('#paper_btn').click(function(){ 
		$('html,body').animate({scrollTop:$('#paper').offset().top}, 1200); 
	}); 

	$('#elementary_btn').click(function(){ 
		$('html,body').animate({scrollTop:$('#elementary').offset().top}, 1200); 
	}); 
});
// JavaScript Document
$(document).ready(function(){
		
		$(window).bind('load resize', function(){
			re_win();
		});


function re_win(){
		
		var imgp = $("img").eq(0);
		var imgwidth = imgp.width();		
		var imgheight = imgp.height();
			
		var winwidth = $(window).width();
		var winheight = $(window).height();
		
		var winratio = winwidth/winheight;
		var imgratio = imgwidth/imgheight;
		
		$(".content").css({height: winheight});
				
		if (winratio>1 && winratio>imgratio){
			$(".content").find(".fullimg").css({
					width: "100%",
					height: "auto"
			});
		}else{
			$(".content").find(".fullimg").css({
					width: "auto",
					height: winheight
			});
		}
}

		
});
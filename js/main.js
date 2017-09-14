$( document ).ready(function() {
	$(".intro").click(function(){
		$(".intro").animate({left: '1920'},function(){
			$(".intro").hide();
		})
		$(".middle").animate ({left: '1920'},function(){
		$(".middle").hide();
		})
	});	
});




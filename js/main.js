$(document).ready(function(){

	$(".config").hide();

	$(".intro").on('click', function(){
		$(".intro").hide();
		$(".slide").animate({width:'toggle'},350); 
	});



	//How about this, so when I press the button, the opacity of the background changes into 1 (fade/animate it in if possible)
});


$(document).ready(function(){
	var $bravery = true;
	var $about = false;
	var $github = false;
	var $img = true;
	$(".next").fadeOut('fast');
	$(".contain").fadeOut('fast');
	$(".bravery").on('click', function() {
		//Write code to reset all data

		if ($about == true) {
			$(".intro").fadeIn('slow');
			$(".slide1").animate({height:'toggle'},350);
		} else if ($github == true) {
			$(".intro").fadeIn("slow");
			$(".slide1").animate({height:'toggle'}, 350);
			$(".slide2").animate({height:'toggle'}, 350);
		}
		$(".progress1").css("background-color","grey");
		$(".progress1").css("box-shadow", "0px 0px 0px #2390c6");
		$(".progress2").css("background-color","grey");
		$(".progress2").css("box-shadow", "0px 0px 0px #2390c6");
		$(".next").fadeOut('fast');
		$(".contain").fadeOut('fast');
		$(".line1").css("background-color","black" );

		$bravery = true;
		$about = false;
		$github = false;
		$('.contain img').css("opacity","0.5");
	});

	$(".intro").on('click', function(){ 
		//Everything works until we press the make me brave button!! NICE MEME.
		$bravery = false;
		$about = true;
		$github = false;

		$(".intro").hide();
		$(".slide1").animate({width:'toggle'},350); 
		$(".progress1").css("background-color","#2390c6");
		$(".progress1").css("box-shadow", "0px 0px 15px #2390c6");
		$(".next").fadeIn('slow');
		$(".contain").fadeIn('slow');
		$('.contain img').css("opacity","0.5");
	});

	$(".about").on('click', function() {
		$(".contain").fadeOut('fast');
		if ($bravery == true) {
			$(".intro").fadeOut('slow');
			$(".slide1").animate({height:'toggle'}, 350);

		} else if ($github == true) {
			$(".slide2").animate({height:'toggle'}, 350);
		}
		$(".progress1").css("background-color","grey");
		$(".progress1").css("box-shadow", "0px 0px 0px #2390c6");
		$(".next").fadeOut('fast');
		$(".progress2").css("background-color","grey");
		$(".progress2").css("box-shadow", "0px 0px 0px #2390c6");
		$(".line1").css("background-color","black" );
		$('.contain img').css("opacity","0.5");
		$about = true;
		$bravery = false;
		$github = false;

	});

	$(".github").on('click', function() {

		if ($bravery == true) {
			$(".intro").fadeOut('slow');
			$(".slide1").animate({height:'toggle'}, 350);
			$(".slide2").animate({height:'toggle'}, 350);
		} else if ($about == true) {
			$(".slide2").animate({height:'toggle'}, 350);
		} 
			$(".progress1").css("background-color","grey");
		$(".progress1").css("box-shadow", "0px 0px 0px #2390c6");
		$(".next").fadeOut('fast');
		$(".progress2").css("background-color","grey");
		$(".progress2").css("box-shadow", "0px 0px 0px #2390c6");
		$(".line1").css("background-color","black" );
		$('.contain img').css("opacity","0.5");
		$github = true;
		$bravery = false;
		$about = false;
	}); 

	$(".next").on('click',function(){
		$(".progress2").css("background-color","#2390c6");
		$(".progress2").css("box-shadow", "0px 0px 15px #2390c6");
		$(".contain").fadeOut('fast');
		$(".line1").css("background-color","#2390c6" );
		$('.contain img').css("opacity","0.5");
	});

	$('.contain img').on('click',function(){
		var opacity = $(this).css("opacity");
		if (opacity == 0.5){
			$(this).css("opacity", "1");
		}else if (opacity == 1){
			$(this).css("opacity", "0.5");
		}
	});


	//How about this, so when I press the button, the opacity of the background changes into 1 (fade/animate it in if possible)
});


$(document).ready(function(){
	var $bravery = true;
	var $about = false;
	var $github = false;

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

		$bravery = true;
		$about = false;
		$github = false;
	});

	$(".intro").on('click', function(){ 
		//Everything works until we press the make me brave button!! NICE MEME.
		$bravery = false;
		$about = true;
		$github = false;

		$(".intro").hide();
		$(".slide1").animate({width:'toggle'},350); 
		$(".progress1").css("background-color",'#004d26');
	});

	$(".about").on('click', function() {

		if ($bravery == true) {
			$(".intro").fadeOut('slow');
			$(".slide1").animate({height:'toggle'}, 350);

		} else if ($github == true) {
			$(".slide2").animate({height:'toggle'}, 350);
		}

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

		$github = true;
		$bravery = false;
		$about = false;
	}); 



	//How about this, so when I press the button, the opacity of the background changes into 1 (fade/animate it in if possible)
});


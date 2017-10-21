$(document).ready(function() {

	var champion_pool = [];

	$('img').on('click', function() {
		/*Shell
		for (int i = 0; i < champion_pool.length(); i++) {
			if ($(this).getId() ==  champion_pool[i]) {
				champion_pool.splice(champion_pool.indexOf($(this).getId()), 1);
				break;
			}
		} else {
			champion_pool.push($(this).getId());
		}

		*/
	});

	var found = false;

	//Errors occur if you click too fast!!!

	$('img').on('click', function() {

		for (i = 0; i < champion_pool.length; i++) {
			if ($(this).attr('id') == champion_pool[i]) {
				found = true; 
				break;
			} 
		} 

		if (found == true) {
			champion_pool.splice(champion_pool.indexOf($(this).attr('id')), 1);
		} else {
			champion_pool.push($(this).attr('id'));
		}

		found = false;
	});

	$(".next").on('click', function() {
		alert(champion_pool.length);
		for (i = 0; i < champion_pool.length; i++) { //Code Testing checking for the correct adding into the list
			alert(champion_pool[i]);
		}           

		var random_champion = Math.floor(Math.random() * champion_pool.length); //This will give out the index of the random champion..
		alert(champion_pool[random_champion]);
		$champion_picture = champion_pool[random_champion]
		$(".stupidity").css('background-image', 'url(images/' + $champion_picture + '.png)');

	});

	$(".bravery, .about, .github").on('click', function() {
		while (champion_pool.length > 0) {
			champion_pool.pop();
		}
	}); 

});
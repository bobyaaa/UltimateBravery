$(document).ready(function() {

	var champion_pool = [];
	var found = false;

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
		
		/* for (i = 0; i < champion_pool.length; i++) { //Code Testing checking for the correct adding into the list
			alert(champion_pool[i]);
		} */           

		found = false;
	});
});
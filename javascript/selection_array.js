$(document).ready(function() {

	var champion_pool = [];

	$('img').on('click', function() {
		
		if (champion_pool.length == 0) {
			champion_pool.push($(this).attr('id'));
			alert(champion_pool[0]);
		}

		/*
		for (int i = 0; i < champion_pool.length(); i++) {
			if ($(this).getId() ==  champion_pool[i]) {
				champion_pool.splice(champion_pool.indexOf($(this).getId()), 1);
				break;
			}
		} else {
			champion_pool.push($(this).getId());
		}

		for (int i = 0; i < champion_pool.length(); i++) {
			alert(champion_pool[i]);
		}*/
	});
});
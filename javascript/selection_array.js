$(document).ready(function() {

	var champion_pool = [];

	alert("eeepepe");

	$('img').on('click', function() {
		
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
		}
	});
});
$(document).ready(function() {

	alert("ehehhehe");
	
	var images = 73;
	itemArray = [];
	
	//Bad for loop
	for (i = 1; i < images + 1; i++) {
		var part1 = "images/Items/";
		var part2 = String(i);
		var part3 = ".png";
		var final = part1.concat(part2.concat(part3));
		itemArray.push(final); 
	}

	for (i = 0; i < 6; i++) {
		var randomItem = Math.floor(1+Math.random()*72);
		switch (i) {
			case 0:
				$(".uno").css('background-image', 'url(' + itemArray[randomItem] +')');
				break;
			case 1:
				$(".dos").css('background-image', 'url(' + itemArray[randomItem] +')');
				break;
			case 2:
				$(".tres").css('background-image', 'url(' + itemArray[randomItem] +')');
				break;
			case 3:
				$(".cuatro").css('background-image', 'url(' + itemArray[randomItem] +')');
				break;
			case 4:
				$(".cinco").css('background-image', 'url(' + itemArray[randomItem] +')');
				break;
			case 5:
				$(".seis").css('background-image', 'url(' + itemArray[randomItem] +')');
				break;
		}
	}
});


$(document).ready(function(){
	for(var x = 0; x<16; x++){
		for(var y = 0; y<16; y++){
			var square = $("<div class = 'square'></div>");
			square.appendTo("#container");
		}
	}
	$(".square").hover(function(){
		$(this).addClass("hovered");
	});
});
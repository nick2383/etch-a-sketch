//var size = 40;

$(document).ready(function(){
	//create grid of 16x16 scquares
	for(var x = 0; x<16; x++){
		for(var y = 0; y<16; y++){
			var square = $("<div class = 'square'></div>");
			square.appendTo("#container");
		}
	}
	//change background colour of squares when mouse hovers over
	$(".square").hover(function(){
		$(this).addClass("hovered");
	});
});

function reset(){
	//prompt user for grid size
	do{size = parseInt(prompt("Please enter from 1 to 40: "));
	}while(isNaN(size) || size<1 || size >40);
	//remove all existing grid squares
	$(".square").remove();
	//set width and height of grid in squares
	if(704%(size+4) != 0){
		var width = Math.floor(704/(size+4));
		var height = Math.floor(704/(size+4));
	}else{
		width = 704/(size+4);
		height = 704/(size+4);
	}
	//populate grid
	for(var x = 0; x<width; x++){
		for(var y = 0; y<height; y++){
			var square = $("<div class = 'square'></div>");
			square.appendTo("#container");
		}
	}
	//change square size
	$(".square").css({
		"width": size+"px", 
		"height": size+"px"});
	$(".square").hover(function(){
		$(this).addClass("hovered");
	});
}

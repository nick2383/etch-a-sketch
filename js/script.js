$(document).ready(function(){
	//create grid of 16x16 scquares
	for(var x = 0; x<16; x++){
		for(var y = 0; y<16; y++){
			$("#container").append("<div class = 'square'></div>");
		}
		$('#container').append("<div class='new_row'></div>");
	}
	//change background colour of squares when mouse hovers over
	$(".square").hover(function(){
		$(this).css("background-colour", "red");
	});
});

function reset(val){
	//prompt user for grid size
	do{size = parseInt(prompt("Please enter from 1 to 64: "));
	}while(isNaN(size) || size<1 || size >64);
	var squareSize = $("#container").width()/size - 2;
	$(".square").remove();
	//populate grid
	for(var x = 0; x<size; x++){
		for(var y = 0; y<size; y++){
			$("#container").append("<div class = 'square'></div>");
		}
		$("#container").append("<div class='new_row'></div>");
	}
	//change square size
	$(".square").css("width",squareSize);
	$(".square").css("height",squareSize);
	
	//set grid colouring scheme
	switch(val){
		//normal red on black
		case 1: $(".square").hover(function(){
					$(this).css("background-colour", "red");
				});
				break;
		//fade black to white
		case 2: $(".square").hover(function(){
					$(this).css("opacity", "-=0.1");
				});
				break;
		//random colour
		case 3: $(".square").hover(function(){
					var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
					$(this).css("background-color", hue);
				});
				break;
		default: break;
	}
}

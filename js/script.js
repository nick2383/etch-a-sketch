var grid = $("<div></div>", {class:"grid", id:""});

$(document).ready(function(){
	$("body").append(grid);
	for (var i = 0; i <=3; i++){
		$('<div />', {
			'class': 'square',
			'id'   : 'div'+i
		}).appendTo(grid);
	}
})
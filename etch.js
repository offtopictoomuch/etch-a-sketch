var container = $(".container");
var original = 16;
var rainbow = false;

$(document).ready(function () {
	loadGrid(original);

	$("#setGrid").click(function () {
		var size = prompt("Enter a number between 64 and 1.", original);
		if(size <= 64 && size >= 1){
			original = size;
			clearGrid();
			loadGrid(original);
		}else{
			alert("Please enter a number between 64 and 1.");
		}
	});

	$("#black").click( function() {
		rainbow = false;
		clearGrid();
		loadGrid(original);
	})

	$("#rainbow").click( function () {
		rainbow = true;
		clearGrid();
		loadGrid(original);
	})


});

function loadGrid(side){
	
	var length = (875.0 / side);
	for(var i = 0; i < side; i++){
		for(var j = 0; j < side; j++){
			container.append("<div class='square'></div>");
		}
		container.append("<br>");
	}

	$(".square").css("height", length + "px");
	$(".square").css("width", length + "px");

	$('.square').mouseenter(function () {
		$(this).addClass('hovered');
		//code to add random color
		if(rainbow === true){
			var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$(this).css("background-color", hue);
		}
	});
}

function clearGrid(){
	container.empty();
}

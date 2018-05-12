// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 0, 255)" 
// ]
	var colors = generateRandomColors(6);
	var squares = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var messagePanel = document.querySelector("#message");
	var h1 = document.querySelector("h1");

	colorDisplay.textContent = pickedColor;

	for(var i =0; i<squares.length; i++){
		//add initial colors to square

		squares[i].style.backgroundColor = colors[i];


		squares[i].addEventListener("click",function(){
			// grab color of clicked square

			var clickedColor = this.style.backgroundColor;
			console.log(clickedColor)
			if(clickedColor === pickedColor){
				messagePanel.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor
			}
			else{
				this.style.backgroundColor = "#232323";
				messagePanel.textContent = "Try again"
			}

			

			//compare to pickedColor
		})
	}



	//change colors
	function changeColors(color){


		for(i=0;i<squares.length;i++){
			squares[i].style.backgroundColor = color;
		}
	}


	function pickColor(){
		var random = Math.floor(Math.random()*colors.length)
		return colors[random]
	}

	function generateRandomColors(num){
		var arr = []

		for(i=0;i<num;i++){
			arr.push(randomColor());
		}
		return arr;
	}

	function randomColor(){
		var r = Math.floor(Math.random() *256);
		var g = Math.floor(Math.random() *256);
		var b = Math.floor(Math.random() *256);
		return "rgb(" + r + ", " + g + ", " + b +")";

	}
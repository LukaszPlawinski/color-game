// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 0, 255)" 
// ]
	var numSquares = 6;
	var colors = generateRandomColors(numSquares);
	var squares = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var messagePanel = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	var resetBtn = document.querySelector("#resetBtn");
	var easyBtn = document.querySelector("#easyBtn");
	var hardBtn = document.querySelector("#hardBtn");

	easyBtn.addEventListener("click",function(){
		h1.style.backgroundColor = "steelblue";
		numSquares = 3;
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected")
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;

		
		for(var i = 0; i<squares.length; i++){
		if(colors [i]){
			squares[i].style.background = colors[i];
		}

		else{
			squares[i].style.display = "none";
		}
		
	}

		
	});


		hardBtn.addEventListener("click",function(){

		h1.style.backgroundColor = "steelblue";
		easyBtn.classList.remove("selected");
		hardBtn.classList.add("selected")
		numSquares = 6;
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;

		
		for(var i = 0; i<squares.length; i++){
		
			squares[i].style.background = colors[i];
		
			squares[i].style.display = "block";
		
		
	}
	});


	colorDisplay.textContent = pickedColor;

	resetBtn.addEventListener("click",function(){
		//generate new colors
		 colors = generateRandomColors(numSquares);
		//pick random color from array
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;

		//change square colors
		for(var i =0; i<squares.length; i++){
		//add initial colors to square
		messagePanel.textContent = "";
		squares[i].style.backgroundColor = colors[i];
		}
		//reset h1 background
		h1.style.backgroundColor = "steelblue";
		//change button text
		resetBtn.textContent = "New colors ";

	});




	
//main function
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
				resetBtn.textContent = "Play again";
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
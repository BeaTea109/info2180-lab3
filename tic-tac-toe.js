function main(){
	window.onload = function(){
		makeSquares();
		document.getElementsByClassName("btn")[0].onclick = function(){
			let nextMove = "X"
			for(let x = 0; x < boxes.length; x++){
			boxes[x].innerHTML = "";
			}
		makeSquares();
		document.getElementById("status").classList.remove("you-won")
    	document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."
        }
		let boxes = document.getElementsByClassName("square");		
		}	
}

function makeSquares(){
	let boxes = document.getElementById("board").getElementsByTagName('div');
	let nextMove = "X"
	for(let x = 0; x < boxes.length; x++){
		boxes[x].classList.add("square");
		//Hovering Functionality
		boxes[x].onmouseover = function(){boxes[x].classList.toggle("hover",true)}
		boxes[x].onmouseout = function(){boxes[x].classList.toggle("hover",false)}

		boxes[x].onclick = function(){
			if  (boxes[x].innerHTML === "" && nextMove === "X"){
				boxes[x].classList.toggle("O",false);
				 boxes[x].innerHTML = "X";
				 nextMove = "O";
				 boxes[x].classList.toggle("X",true);
				 winChecker(boxes);
			}
			else if (boxes[x].innerHTML === ""  && nextMove === "O"){
				boxes[x].classList.toggle("X",false);
				 boxes[x].innerHTML = "O";
				 nextMove = "X";
				 boxes[x].classList.toggle("O",true);
				 winChecker(boxes);
			}
		}
	}

}
	
function winChecker(boxes){
	
	if (boxes[0].innerHTML !== "" && (boxes[0].innerHTML === boxes[1].innerHTML && (boxes[1].innerHTML === boxes[2].innerHTML))){
		document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML =   "Congratulations! "+ boxes[0].innerHTML+ " is the Winner!";
	}
	if (boxes[3].innerHTML !== "" && (boxes[3].innerHTML === boxes[4].innerHTML && (boxes[4].innerHTML === boxes[5].innerHTML))){
		document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML =   "Congratulations! "+ boxes[3].innerHTML+ " is the Winner!";
	}
	if (boxes[6].innerHTML !== "" && (boxes[6].innerHTML === boxes[7].innerHTML && (boxes[7].innerHTML === boxes[8].innerHTML))){
		document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML =   "Congratulations! "+ boxes[6].innerHTML+ " is the Winner!";
	}

	if (boxes[0].innerHTML !== "" && (boxes[0].innerHTML === boxes[3].innerHTML && (boxes[3].innerHTML === boxes[6].innerHTML))){
		document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML =   "Congratulations! "+ boxes[0].innerHTML+ " is the Winner!";
	}
	if (boxes[1].innerHTML !== "" && (boxes[1].innerHTML === boxes[4].innerHTML && (boxes[4].innerHTML === boxes[7].innerHTML))){
		document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML =   "Congratulations! "+ boxes[1].innerHTML+ " is the Winner!";
	}
	if (boxes[2].innerHTML !== "" && (boxes[2].innerHTML === boxes[5].innerHTML && (boxes[5].innerHTML === boxes[8].innerHTML))){
		document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML =   "Congratulations! "+ boxes[2].innerHTML+ " is the Winner!";
	}

	if (boxes[0].innerHTML !== "" && (boxes[0].innerHTML === boxes[4].innerHTML && (boxes[4].innerHTML === boxes[8].innerHTML))){
		document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML =   "Congratulations! "+ boxes[0].innerHTML+ " is the Winner!";
	}	
	if (boxes[2].innerHTML !== "" && (boxes[2].innerHTML === boxes[4].innerHTML && (boxes[4].innerHTML === boxes[6].innerHTML))){
		document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML =   "Congratulations! "+ boxes[2].innerHTML+ " is the Winner!";
	}		

}


main();
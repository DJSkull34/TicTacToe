"use strict"
console.log("Hello World");
var object = {
	name:"real object",
	refname:console.log(this.name)
};
var fakeobject = {
	name:"real object...",
	refname:object.refname
};
console.log(fakeobject.name);
object.refname //== blank?
function submitted() {
	console.log("works");
	document.getElementById("input1").innerHTML = "txeT";
	var forma = document.getElementById("inputform").value
	document.getElementById("input2").innerHTML = forma + "<br>" + Date();
}
object.refname=console.log("coded over");
var x = new Object();
x.name = console.log("This New Object");
console.log(fakeobject.name);
var testsetup = 0;
if (testsetup == 1){
	if(undefined == null){
		console.log("complete");
	}
	else{
		console.log("error");
	}
	if(undefined === null){
		console.log("complete");
	}
	else{
		console.log("error");
	}
}
else{
	console.log("==T ===F");
}
var buttonpress = "did not press";
var funt = function(input){
	if(document.getElementById("input1").innerHTML == "txeT"){
		buttonpress = "pressed";
	}
	console.log("You typed " + input + " and you " + buttonpress + " the button.");
};
var prompts = 0;
window.setTimeout(waited, 2000);
function waited(){
	if(prompts == 1){
		var temp123 = prompt("Type anything");
		if (temp123 == ""){
			temp123 = "nothing";
		}
		if(temp123 == null){
			buttonpress = "ignored";
			temp123 = "nothing";
		}
		funt(temp123);
	}
}
function colourchange(){
	var box = document.getElementById("box");
	box.style.backgroundColor = "blue";
}
function changeback(x){
	var colour = x;
	document.getElementById(colour).style.backgroundColor = "red";
}
var squareclicked = 0
function clicked(){
	if (squareclicked < 1){
		document.getElementById("box").style.backgroundColor = "cyan";
	}
	else if (squareclicked > 0){
		/*var array = ["cyan", "green", "purple", "magenta", "fuschia", "gold", "wheat"];
		var picker = Math.floor(Math.random() * (array.length - 1));*/
		var randomletter = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
		var outputcolour = "";
		for(x = 0; x < 6; x++){
			var picker2 = Math.floor(Math.random() * (randomletter.length));
			outputcolour = outputcolour + randomletter[picker2];
		}
		document.getElementById("box").style.backgroundColor = "#" + outputcolour;
		console.log("#" + outputcolour);
	}
	squareclicked = squareclicked + 1;
}
window.setTimeout(secretbutton, 2000);
function secretbutton(){
	console.log(squareclicked);
}
function numberGrab(x){
	var number = x;
	document.getElementById(number).style.backgroundColor="blue";
}
var gameObject = {
	1:false,
	2:false,
	3:false,
	4:false,
	5:false,
	6:false,
	7:false,
	8:false,
	9:false,
	checkFunction: function(z){
		if(gameObject[z] == true){
			return true;
		}
		else{
			return false;
		}
	},
	setTrue: function(y){
		gameObject[y] = true;
	}
};
var circle = 4;
var cross = 3;
function selected(x){
	if(gameObject.checkFunction(x) == true){
		console.log("already selected");
	}
	else if(cross == 3){
		circle = 3;
		cross = 4;
		gameObject.setTrue(x);
		document.getElementById(x).innerHTML = "X";
		document.getElementById(x).style.fontSize = document.getElementById(x).style.fontSize + 120;
		document.getElementById(x).style.fontFamily = "Arial";
		document.getElementById("turnCount").innerHTML = "It is O's turn";
	}
	else if(circle == 3){
		circle = 4;
		cross = 3;
		gameObject.setTrue(x);
		document.getElementById(x).innerHTML = "O";
		document.getElementById(x).style.fontSize = document.getElementById(x).style.fontSize + 120;
		document.getElementById(x).style.fontFamily = "Arial";
		document.getElementById("turnCount").innerHTML = "It is X's turn";
	}
}
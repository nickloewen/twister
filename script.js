function bodyPart(name) {
	this.name = name;
	this.color = "unset"; 
}

var lFoot = new bodyPart("Left foot"),
	rFoot = new bodyPart("Right foot"),
	lHand = new bodyPart("Left hand"),
	rHand = new bodyPart("Right hand");

var bodyParts = [lFoot, rFoot, lHand, rHand];
var colors = ["red", "yellow", "green", "blue"];

function nextAction() {
	var nextBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)],
		nextColor = colors[Math.floor(Math.random() * colors.length)];

	moveYourBody(nextBodyPart, nextColor);
}

function moveYourBody(bodyPart, color) {
	if (bodyPart.color == color) {
		// already on that color, so try again
		nextAction();
	} else {
		// move it
		bodyPart.color = color;
		// write it on the page
		document.getElementById("bodyPart").innerHTML = bodyPart.name;
		document.getElementById("color").innerHTML = color;
	}
}
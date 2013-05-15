function BodyPart(name) {
	/* An object representing a body part. */
	this.name = name;
	this.color = undefined;
}

var lFoot = new BodyPart("Left foot"),
	rFoot = new BodyPart("Right foot"),
	lHand = new BodyPart("Left hand"),
	rHand = new BodyPart("Right hand");

var bodyParts = [lFoot, rFoot, lHand, rHand];
var colors = ["red", "yellow", "green", "blue"];

function moveBody(bodyPart, color) {
	/**
	 * Update a given bodyPart and the page to a given color. However, if the
	 * bodyPart is already on that color, do not move it there again; rather,
	 * try again.
	 *
	 * Arguments:
	 * bodyPart - the bodyPart to move
	 * color - the color to try to move it to
	 **/

	if (bodyPart.color === color) {
		// already on that color, so try again
		nextAction();
	} else {
		// move it
		// update the object
		bodyPart.color = color;
		// write it on the page
		document.getElementById("bodyPart").innerHTML = bodyPart.name;
		document.getElementById("color").innerHTML = color;
	}
}

function nextAction() {
	/* Generate a random body part and color, and call 'moveBody' with them. */
	var nextBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)],
		nextColor = colors[Math.floor(Math.random() * colors.length)];

	moveBody(nextBodyPart, nextColor);
}

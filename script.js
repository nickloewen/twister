function BodyPart(name) {
    this.name = name;
    this.color = "unset";
}

var lFoot = new BodyPart("Left foot"),
    rFoot = new BodyPart("Right foot"),
    lHand = new BodyPart("Left hand"),
    rHand = new BodyPart("Right hand");

var bodyParts = [lFoot, rFoot, lHand, rHand];
var colors = ["red", "yellow", "green", "blue"];

function moveYourBody(bodyPart, color) {
    if (bodyPart.color === color) {
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

function nextAction() {
    var nextBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)],
        nextColor = colors[Math.floor(Math.random() * colors.length)];

    moveYourBody(nextBodyPart, nextColor);
}
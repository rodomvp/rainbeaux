
var c;
var weight;

function setup() {
	createCanvas(1200, 780);
	background(255, 255, 255);
	c = color('white');
	weight = 5;
}

function mouseClicked() {
	if(mouseX >= 1 && mouseX <= 26 && mouseY >= 1 && mouseY <= 26)
		c = color('red');
	if(mouseX >= 1 && mouseX <= 26 && mouseY >= 27 && mouseY <= 52)
		c = color('orange');
	if(mouseX >= 1 && mouseX <= 26 && mouseY >= 53 && mouseY <= 78)
		c = color('yellow');
	if(mouseX >= 1 && mouseX <= 26 && mouseY >= 79 && mouseY <= 104)
		c = color('green');
	if(mouseX >= 1 && mouseX <= 26 && mouseY >= 105 && mouseY <= 130)
		c = color('cyan');
	if(mouseX >= 1 && mouseX <= 26 && mouseY >= 131 && mouseY <= 156)
		c = color('blue');
	if(mouseX >= 1 && mouseX <= 26 && mouseY >= 157 && mouseY <= 182)
		c = color('magenta');
	if(mouseX >= 1 && mouseX <= 26 && mouseY >= 183 && mouseY <= 208)
		c = color('brown');
	if(mouseX >= 1 && mouseX <= 26 && mouseY >= 209 && mouseY <= 234)
		c = color('white');
	if(mouseX >= 1 && mouseX <= 26 && mouseY >= 235 && mouseY <= 260)
		c = color('black');
	if(mouseX >= 8 && mouseX <= 18 && mouseY >= 270 && mouseY <= 280)
		weight = 5;
	if(mouseX >=3 && mouseX <= 23 && mouseY >= 280 && mouseY <= 300)
		weight = 10;
	if(mouseX >= 0 && mouseX <= 22 && mouseY >= 295 && mouseY <= 325)
		weight = 15;
}

function draw() {
	if (mouseIsPressed == true) {
		stroke(c);
		strokeWeight(weight);
		line(mouseX, mouseY, pmouseX, pmouseY);
	}

	noStroke();
	fill(color('white'));
	rect(0, 0, 27, 325);
	noStroke();
	fill(color('red'));
	rect(1, 1, 25, 25);
	noStroke();
	fill(color('orange'));
	rect(1, 27, 25, 25);
	noStroke();
	fill(color('yellow'));
	rect(1, 53, 25, 25);
	noStroke();
	fill(0, 255, 0);
	rect(1, 79, 25, 25);
	noStroke();
	fill(color('cyan'));
	rect(1, 105, 25, 25);
	noStroke();
	fill(color('blue'));
	rect(1, 131, 25, 25);
	noStroke();
	fill(color('magenta'));
	rect(1, 157, 25, 25);
	noStroke();
	fill(color('brown'));
	rect(1, 183, 25, 25);
	noStroke();
	fill(color('white'));
	rect(1, 209, 25, 25);
	noStroke();
	fill(color('black'));
	rect(1, 235, 25, 25);
	stroke('black');
	strokeWeight(1);
	noFill();	
	fill('black');
	ellipse(13, 275, 5, 5);	
	ellipse(13, 290, 10, 10);
	ellipse(13, 310, 15, 15);

}
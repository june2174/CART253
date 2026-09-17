/**
 * instructions class
 * Juna
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    //sky
    background(75, 52, 156);

    push();
    fill(81, 57, 163);
    noStroke();
    rect(0, 100, 800, 100);
    pop();

    push();
    fill(87, 63, 171);
    noStroke();
    rect(0, 200, 800, 100);
    pop();

    push();
    fill(97, 73, 181);
    noStroke();
    rect(0, 300, 800, 100);
    pop();

    //land
    push();
    fill(69, 99, 73);
    noStroke();
    rect(0, 400, 800, 100);
    pop();

    firefly(100, 120);
    firefly(250, 100);
    firefly(300, 200);
    firefly(580, 250);
    firefly(720, 300);

    //moon
    push();
    noStroke();
    fill(255, 234, 131);
    ellipse(700, 100, 100, 100);
    pop();

    push();
    noStroke();
    fill(247, 216, 62);
    ellipse(680, 85, 40, 40);
    pop();

    push();
    noStroke();
    fill(247, 216, 62);
    ellipse(730, 105, 30, 30);
    pop();

    push();
    noStroke();
    fill(247, 216, 62);
    ellipse(710, 135, 20, 20);
    pop();
}

//fly
function firefly(x, y) {
    noStroke();
    //lights
    fill(255, 255, 100, 50);
    ellipse(x, y, 35, 35);

    //wings
    push();
    translate(x, y);
    rotate(-0.4);
    fill(200, 220, 200, 150);
    ellipse(-8, -8, 15, 6);
    pop();

    push();
    translate(x, y);
    rotate(0.4);
    fill(200, 220, 200, 150);
    ellipse(8, -8, 15, 6);
    pop();

    //body
    fill(50, 40, 20);
    ellipse(x, y, 7, 15);

    //lighting part
    fill(255, 255, 100);
    ellipse(x, y + 5, 5, 5);
}
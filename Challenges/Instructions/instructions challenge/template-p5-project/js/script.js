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

    push();
    fill(69, 99, 73);
    noStroke();
    rect(0, 400, 800, 100);
    pop();
}
/**
 * Abstract-Alien
 * Juna Kim
 * 
 * Geometrical version of alien with pop colors pink!
 * 
 */

"use strict";

/**
 * Canvas size + I'll draw with noStroke
*/
function setup() {
    createCanvas(600, 600);
    noStroke();
}


/**
 * I'll draw a geometrical alien with pop colors
*/
function draw() {
    background(255, 80, 160);

    //Head
    fill(80, 230, 255);
    ellipse(300, 300, 380, 330);

    //Outer circles
    fill(180, 70, 240);
    ellipse(300, 300, 290, 250);
    fill(255, 210, 50);
    ellipse(300, 300, 210, 180);

    //Eyes
    fill(30, 20, 80);
    ellipse(235, 280, 80, 110);
    ellipse(365, 280, 80, 110);
    fill(255, 80, 180);
    ellipse(235, 280, 35, 65);
    ellipse(365, 280, 35, 65);

    //Mouth
    fill(80, 230, 255);
    ellipse(300, 350, 50, 50);
}
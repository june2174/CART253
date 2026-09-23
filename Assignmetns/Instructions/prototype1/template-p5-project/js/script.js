/**
 * Representational
 * Juna Kim
 * 
 * I'll draw an alien
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
 * I'll draw alien with green body, pop colors, ..cute one
*/
function draw() {
    background(20, 10, 45);

    //Shadow
    fill(80, 220, 120);
    ellipse(300, 530, 420, 45);

    //Body
    fill(120, 255, 120);
    ellipse(300, 390, 210, 250);

    //Head
    fill(140, 255, 150);
    ellipse(300, 220, 280, 230);
}
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

    //Antenna
    stroke(180, 255, 80);
    strokeWeight(8);
    line(250, 180, 210, 110);
    line(350, 180, 390, 110);
    noStroke();

    //Antenna balls
    fill(255, 80, 180);
    ellipse(210, 105, 30, 30);
    fill(80, 220, 255);
    ellipse(390, 105, 30, 30);

    // Arms
    noFill();
    stroke(100, 230, 100);
    strokeWeight(10);
    bezier(210, 330, 150, 350, 150, 430, 185, 475);
    bezier(390, 330, 450, 350, 450, 430, 415, 475);
    noStroke();

    //Body
    fill(120, 255, 120);
    ellipse(300, 390, 210, 250);

    // Hands
    fill(80, 220, 255);
    ellipse(185, 475, 55, 55);
    fill(255, 80, 180);
    ellipse(415, 475, 55, 55);

    //Head
    fill(140, 255, 150);
    ellipse(300, 220, 280, 230);

    //Eyes
    fill(30, 20, 70);
    ellipse(245, 220, 70, 70);
    ellipse(355, 220, 70, 70);
    fill(255);
    ellipse(235, 205, 18, 18);
    ellipse(345, 205, 18, 18);

    //Nose
    fill(255, 210, 60);
    ellipse(300, 270, 35, 25);

    //Mouth
    fill(40, 20, 70);
    arc(300, 295, 100, 60, 0, PI);

    //Belly
    fill(255, 210, 60);
    ellipse(300, 405, 100, 130);
}
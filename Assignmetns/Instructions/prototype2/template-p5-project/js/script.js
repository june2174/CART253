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

    //Petal shapes
    for (let i = 0; i < TWO_PI; i += PI / 6) {
        let x = 300 + cos(i) * 230;
        let y = 300 + sin(i) * 200;

        push();
        translate(x, y);
        rotate(i);
        fill(80, 230, 255, 80);
        ellipse(0, 0, 100, 55);
        pop();
    }

    //Antenna
    stroke(30, 20, 80);
    strokeWeight(10);
    line(230, 150, 150, 70);
    line(370, 150, 450, 70);
    noStroke();
    fill(255, 210, 50);
    ellipse(150, 70, 50, 50);
    ellipse(450, 70, 50, 50);

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
/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    let x = 0;
    let y = 0;

    let r = random(255);
    let g = random(255);
    let b = random(255);

    while (x <= width && y <= height) {
        push();
        stroke(r, g, b);
        strokeWeight(x / 50);
        line(x, 0, x, height);
        x += 50;
        pop();

        push();
        stroke(r, g, b);
        strokeWeight(y / 50);
        line(0, y, width, y);
        y += 50;
        pop();
    }
    noLoop();
}
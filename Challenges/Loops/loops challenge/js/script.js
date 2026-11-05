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
    colorMode(HSB, 360, 100, 100);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background(200, 20, 90);

    for (let x = 0; x <= width; x++) {
        let gradcolor = map(sin(frameCount * 0.03 + x * 0.01), -1, 1, 0, 360);
        stroke(gradcolor, 50, 90);
        line(x, 0, x, height);
    }
}
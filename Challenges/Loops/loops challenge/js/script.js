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

    for (let x = 0; x <= width; x++) {
        let gradcolor = map(x, 0, width, 0, 255);
        stroke(gradcolor);
        line(x, 0, x, height);
    }
}
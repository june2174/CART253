/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};

let sky = {
    fill: {
        r: 160,
        g: 180,
        b: 200
    }
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    background(sky.fill.r, sky.fill.g, sky.fill.b);
    sky.fill.r = sky.fill.r * 0.9999;
    sky.fill.g = sky.fill.g * 0.9999;
    sky.fill.b = sky.fill.b * 0.9999;
    sky.fill.r = constrain(sky.fill.r, 20, 200);
    sky.fill.g = constrain(sky.fill.g, 30, 200);
    sky.fill.b = constrain(sky.fill.b, 50, 200);

    mrFurious.fill.g = mrFurious.fill.g * 0.999;
    mrFurious.fill.b = mrFurious.fill.b * 0.999;
    mrFurious.fill.g = constrain(mrFurious.fill.g, 100, 225);
    mrFurious.fill.b = constrain(mrFurious.fill.b, 100, 225);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
}
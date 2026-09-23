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

let bird = {
    x: 70,
    y: 50,
}

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
    sky.fill.r = sky.fill.r * 0.999;
    sky.fill.g = sky.fill.g * 0.999;
    sky.fill.b = sky.fill.b * 0.999;
    sky.fill.r = constrain(sky.fill.r, 20, 200);
    sky.fill.g = constrain(sky.fill.g, 30, 200);
    sky.fill.b = constrain(sky.fill.b, 50, 200);

    mrFurious.fill.g = mrFurious.fill.g * 0.99;
    mrFurious.fill.b = mrFurious.fill.b * 0.99;
    mrFurious.fill.g = constrain(mrFurious.fill.g, 80, 225);
    mrFurious.fill.b = constrain(mrFurious.fill.b, 80, 225);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

    drawBird(bird.x, bird.y);
    bird.x = bird.x + 2;
    bird.y = bird.y + random(-4, 5);

    if (bird.x > width) {
        bird.x = 0;
        bird.y = random(0, 100);
    }
}

function drawBird(x, y) {
    noStroke();
    //Wing1
    push();
    translate(x, y);
    fill(212, 174, 8);
    rotate(0.4);
    ellipse(-25, 0, 30, 10);
    pop();

    //Body
    push();
    translate(x, y);
    fill(255, 219, 57);
    ellipse(-15, 0, 40, 15);
    pop();

    //Wing2
    push();
    translate(x, y);
    fill(232, 193, 18);
    rotate(-0.4);
    ellipse(-25, -5, 30, 10);
    pop();

    //Peak
    push();
    translate(x, y);
    fill(252, 158, 2);
    triangle(8, -5, 8, 5, 18, 0);
    pop();

    //Head
    fill(255, 219, 57);
    ellipse(x, y, 20);

    //Eye
    push();
    fill(0);
    translate(x, y);
    ellipse(3, -2, 3);
    pop();
}
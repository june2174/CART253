/**
 * Weird-Alien
 * Juna Kim
 * 
 * I'll make a mosaic pattern of representational alien and abstract alien
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
 * background and mosaic pattern loop
*/
function draw() {
    background(20, 10, 45);

    let index = 0;

    for (let x = 15; x < 600; x += 15) {
        for (let y = 15; y < 600; y += 15) {

            //representational and abstract
            if (index % 2 == 0) {
                drawAlienTile(x, y, "representational");
            } else {
                drawAlienTile(x, y, "abstract");
            }

            index++;
        }
    }
}

/**
 * Draw one tiny alien head
 */
function drawAlienTile(x, y, type) {

    if (type == "representational") {

        // Green alien head
        fill(140, 255, 150);
        ellipse(x, y, 12, 10);

        // Eyes
        fill(30, 20, 70);
        ellipse(x - 3, y, 2, 4);
        ellipse(x + 3, y, 2, 4);

        // Nose
        fill(255, 210, 60);
        ellipse(x, y + 2, 2, 2);

    }
}
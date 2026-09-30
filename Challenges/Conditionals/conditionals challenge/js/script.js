/**
 * Circle Master
 * Juna Kim
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");
    // Move user circle
    moveUser();

    // Draw the user and puck
    drawUser();
    drawPuck();
    movePuck();

}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

/**
 * moving puck when user circle overlaps with puck
 * */
function movePuck() {
    let distance = dist(user.x, user.y, puck.x, puck.y);
    let minDistance = (user.size + puck.size) / 2;

    if (distance < minDistance) {
        let angle = atan2(puck.y - user.y, puck.x - user.x);
        let force = 5; // Adjust the force as needed

        puck.x = user.x + cos(angle) * minDistance;
        puck.y = user.y + sin(angle) * minDistance;
    }
}
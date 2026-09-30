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
    size: 50,
    fill: "#ff0000"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 30,
    fill: "#000000"
};

const target = {
    x: 100,
    y: 100,
    size: 60,
    fill: "#5D7050", // red to start
    fills: {
        noOverlap: "#5D7050", // red for no overlap
        overlap: "#FFE429" // green for overlap
    }
}

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
    drawTarget();
    checkTarget();
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
    if (!puck.vel) {
        puck.vel = createVector(0, 0);
    }

    puck.x += puck.vel.x;
    puck.y += puck.vel.y;

    let distance = dist(user.x, user.y, puck.x, puck.y);
    let minDistance = (user.size + puck.size) / 2;

    if (distance < minDistance) {
        let angle = atan2(puck.y - user.y, puck.x - user.x);
        let force = 3; // Adjust the force as needed

        puck.x = user.x + cos(angle) * minDistance;
        puck.y = user.y + sin(angle) * minDistance;

        puck.vel = createVector(cos(angle) * force, sin(angle) * force);
        puck.vel.mult(4);
    }

    //To keep puck inside the canvas
    if (puck.x - puck.size / 2 < 0) {
        puck.x = puck.size / 2;
        puck.vel.x *= -1;
    }

    if (puck.x + puck.size / 2 > width) {
        puck.x = width - puck.size / 2;
        puck.vel.x *= -1;
    }

    if (puck.y - puck.size / 2 < 0) {
        puck.y = puck.size / 2;
        puck.vel.y *= -1;
    }

    if (puck.y + puck.size / 2 > height) {
        puck.y = height - puck.size / 2;
        puck.vel.y *= -1;
    }
}

function drawTarget() {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
}

function checkTarget() {
    const d = dist(puck.x, puck.y, target.x, target.y);
    const overlap = (d < user.size / 2 + target.size / 2);
    if (overlap) {
        target.fill = target.fills.overlap;
    }
    else {
        target.fill = target.fills.noOverlap;
    }
}
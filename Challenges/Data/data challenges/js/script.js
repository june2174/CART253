/**
 * Terrible Car Name Generator
 * Juna Kim
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;

let lang = "en";

// Starts with the instruction
let carName = "";

/**
 * Load the car and dinosaur data
 */
async function preload() {
    carData = await loadJSON("assets/data/cars.json");
    dinosaurData = await loadJSON("assets/data/dinosaurs.json");
    langData = await loadJSON("assets/data/lang.json");
}

/**
 * Create the canvas
*/
async function setup() {
    createCanvas(600, 400);
    //await preload();
    changeLanguae();
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(15);
    text(carName, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {
    let car = random(carData.cars);
    let dinosaur = random(dinosaurData.dinosaurs);

    carName = car + " " + dinosaur;
}

function changeLanguae() {
    if (langData) {
        carName = langData.instructions[lang];
    }
}

function keyPressed() {
    if (key === "e" || key === "E") {
        lang = "en";
        changeLanguae();
    } else if (key === "k" || key === "K") {
        lang = "kr";
        changeLanguae();
    } else if (key === "f" || key === "F") {
        lang = "fr";
        changeLanguae();
    }
}
let Prompt = require("prompt-sync")();
// JavaScript Math Functions

// Math.round(x) - Rounds x to the nearest integer (4.6 → 5).
// Math.ceil(x) - Rounds x up to the next integer (4.1 → 5).
// Math.floor(x) - Rounds x down to the previous integer (4.9 → 4).
// Math.trunc(x) - Removes the decimal part of x (4.9 → 4).
// Math.pow(base, exp) - Returns base raised to the power of exp (2, 3 → 8).
// Math.sqrt(x) - Returns the square root of x (9 → 3).
// Math.cbrt(x) - Returns the cube root of x (27 → 3).
// Math.abs(x) - Returns the absolute value of x (-5 → 5).
// Math.max(x, y, ...) - Returns the highest value (5, 10, 15 → 15).
// Math.min(x, y, ...) - Returns the lowest value (5, 10, 15 → 5).
// Math.random() - Returns a random decimal between 0 (inclusive) and 1 (exclusive) (→ 0.234).
// number.toFixed(digits) - Converts a number to a string with specified decimals (3.14159, 2 → "3.14").

// ->Math problems :

// Q1. calculate compound interest

let p = Number(prompt("enter the principle amount"));
let r = Number(prompt("enter  the rate of intrest"));
let t = Number(prompt("enter the duration"));

//formula for compund intrest👇
// A = P * (1 + r / 100) ^ t;
// CP = A - P;
console.log(p * Math.pow(1 + r / 100, t) - p);

// Q2. Generate OTP

console.log(Math.floor(Math.random() * 9000 + 1000));

// Q3. Area of triangle by heron’s formula

let x = Number(prompt("enter a number"));
let y = Number(prompt("enter a number"));
let z = Number(prompt("enter a number"));

/* heron's formula👇
Area = √(s * (s - a) * (s - b) * (s - c)) */

if (x + y <= z || x + z <= y || y + z <= x) {
  console.log("Calculating area of triiangle is not possible");
} else {
  let s = (a + b + c) / 2;
  console.log(Math.sqrt(s * (s - x) * (s - y) * (s - z)));
}

// Q4. Circumference of circle

let R = Number(prompt("enter the radius"));

/* Circumference formula👇
Circumference = 2 * π * r
*/

console.log(2 * Math.PI * R);


const prompt = require("prompt-sync")();

// Q1. sum of two integer?

let a = Number(prompt("enter a number"));
let b = Number(prompt("enter a number"));
console.log(a + b);
// output : x

// Q2. Relation between integer and string
/*
string + string = string(concatination)
string + integer(number) = string(concatination)
integer + integer = integer (Arthemetic Operation)
examples below 👇
*/

let c = "hello";
let d = "world";
let e = 10;
let f = 20;
console.log(c + d); // output : hello world
console.log(c + e); // output : hello10
console.log(e + f); // output : 30

//Q3. sum and message

let g = 5;
let h = 6;
console.log("sum of " + g + " and " + h + " is " + g + h); // output : sum of 5 and 6 is 56.
// explained how js solves this 👇
// Js solves from left to right
// "sum of 5 " + " and " + h + " is " + g + h
// "sum of 5 and " + h + " is " + g + h
// "sum of 5 and 6 " + " is " + g + h
// "sum of 5 and 6 is " + g + h
// "sum of 5 and 6 is 5 " + h
// "sum of 5 and 6 is 56" (everything is concatinated)
console.log("sum of " + g + " and " + h + " is " + (g + h)); // output : sum of 5 and 6 is 11.
// In JavaScript, whatever is given in parentheses () is given the highest priority in terms of evaluation.
console.log(g + h + " is sum of " + g + " and " + h); // output : 11 is sum of 5 and 6

// —type coercion. (automatically converting one data type to another in JavaScript.)

console.log(1 + "1"); // output : 11 (coz plus performs two operations concat and arthemetic operations)
console.log(1 + 1); // output : 2
console.log(5 * "2"); // output : 10
console.log(5 / "2"); // output : 2.5

//Q4. Accept and print the answer

let age = prompt("enter your age");
console.log(age);

//Q5. Swap two variables via 3 methods

//1st method
let aa = 10;
let bb = 20;

let temp = aa;
aa = bb;
bb = temp;
console.log(aa, bb); // output : 20 10

// 2nd method

aa = aa + bb; // aa = 30
bb = aa - bb; // bb = 10
aa = aa - bb; // aa = 20
console.log(aa, bb); // output : 20 10

// 3rd method

[aa, bb] = [bb, aa];
console.log(aa, bb); // output : 20 10

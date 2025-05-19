let Prompt = require("prompt-sync")();
// → IF-ELSE :

// Q5.Accept two numbers and print the greatest between them

let A = Number(prompt("enter a number"));
let B = Number(prompt("enter a number"));

if (A > B) console.log(A + " is Greater");
else console.log(B + " is Greater");

// Q6.Accept an integer and check whether it is an even number or odd.

let C = Number(prompt("enter a number"));

if (C % 2 == 0) console.log("even number");
else console.log("Odd number");

// Q7.Accept name and age from the user. Check if the user is a valid voter or not.

let user = prompt("Enter your name");
let age = Number(prompt("enter your age"));

if (age >= 18) console.log(user + " is a Valid voter");
else console.log(user + " is not a valid voter");

// Q8.Accept three numbers and print the greatest among them

// Accepting three numbers

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let num3 = Number(prompt("Enter third number: "));

// Finding the greatest number  (Method - 1)

let greatest = Math.max(num1, num2, num3);

// Printing the greatest number

console.log("The greatest number is:", greatest);

// (Method - 2)
let greater = 0;
if (num1 >= num2 && num1 >= num3) greater = num1;
else if (num2 >= num1 && num2 >= num3) greater = num2;
else greater = num3;
console.log("The greatest number is " + greater);

// Q9.Accept a year and check if it a leap year or not (google to find out what's a leap year)

let year = Number(prompt("enter a year "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

// Q10.Shop discount - Description on Graphic

let amount = Number(prompt("Enter the amount"));
let discount = 0;

if (amount <= 0) console.log("Invalid input");
else if (amount <= 5000) discount = 0;
else if (amount <= 7000) discount = 5;
else if (amount <= 9000) discount = 10;
else discount = 20;
console.log(
  `Final Amount after ${discount}% discount: ₹${
    amount - (discount * amount) / 100
  }`
);

// Q11.Electricity Bill - Description on Graphic

let units = Number(prompt("Enter the units consumed: "));
let bill = 0;

// Calculating bill based on units
if (units <= 0) {
  console.log("Invalid input");
} else if (units <= 100) {
  bill = units * 3;
} else if (units <= 300) {
  bill = (100 * 3) + ((units - 100) * 5);
} else {
  bill = (100 * 3) + (200 * 5) + ((units - 300) * 8);
}

// Displaying the bill
console.log(`Total Electricity Bill: ₹${bill.toFixed(2)}`);

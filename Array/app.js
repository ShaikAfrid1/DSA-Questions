const prompt = require("prompt-sync")();
let n = Number(prompt("enter a number"));
let copyN = n;
let ans = 0;

while (n > 0) {
  let rem = n % 10;
  let fact = 1;
  for (let i = 1; i <= rem; i++) {
    fact = fact * i;
  }
  ans = ans + fact;
  n = Math.floor(n / 10);
}
if (ans == copyN) console.log("strong Number");
else console.log("Not a strong number");

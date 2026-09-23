const num = parseInt(prompt("Enter a positive integer:"), 10);
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}

document.getElementById("target").innerText = `Sum of natural numbers up to ${num} is: ${sum}`;

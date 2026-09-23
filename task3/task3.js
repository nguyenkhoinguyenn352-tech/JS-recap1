const side1 = parseFloat(prompt("Enter side 1:"));
const side2 = parseFloat(prompt("Enter side 2:"));
const side3 = parseFloat(prompt("Enter side 3:"));

let type = "";

if (side1 === side2 && side2 === side3) {
  type = "Equilateral";
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  type = "Isosceles";
} else {
  type = "Scalene";
}

document.getElementById("target").innerText = `The triangle is: ${type}`;

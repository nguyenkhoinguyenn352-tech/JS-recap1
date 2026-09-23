const celsius = parseFloat(prompt("Enter temperature in Celsius:"));
const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

document.getElementById("target").innerHTML = `
  ${celsius}°C is equal to:<br>
  - ${fahrenheit.toFixed(2)}°F<br>
  - ${kelvin.toFixed(2)} K
`;

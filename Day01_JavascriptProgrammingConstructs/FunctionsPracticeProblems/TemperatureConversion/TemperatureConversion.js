//Help user find degF or degC based on their conversion selection.

const readline = require("readline-sync");

function celsiusToFahrenheit(degC) {
    return (degC * 9 / 5) + 32;
}

function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5 / 9;
}

console.log("Select Conversion: \n1. Celsius to Fahrenheit \n2. Fahrenheit to Celsius");
let choice = parseInt(readline.question("Enter your choice (1 or 2): "));

switch (choice) {
    case 1:
        let degC = parseFloat(readline.question("Enter temperature in Celsius: "));
        if (degC >= 0 && degC <= 100) {
            console.log(`${degC}°C = ${celsiusToFahrenheit(degC)}°F`);
        } else {
            console.log("Temperature out of valid range (0°C - 100°C)");
        }
        break;
    case 2:
        let degF = parseFloat(readline.question("Enter temperature in Fahrenheit: "));
        if (degF >= 32 && degF <= 212) {
            console.log(`${degF}°F = ${fahrenheitToCelsius(degF).toFixed(2)}°C`);
        } else {
            console.log("Temperature out of valid range (32°F - 212°F)");
        }
        break;
    default:
        console.log("Invalid choice");
}
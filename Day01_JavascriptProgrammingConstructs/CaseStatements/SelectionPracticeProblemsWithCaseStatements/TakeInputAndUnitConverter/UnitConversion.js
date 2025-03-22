// WAP that takes user inputs and does unit conversion of different lengthsvunits.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Choose a conversion type:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

readline.question("Enter conversion type (1-4): ", (conversionType) => {
    readline.question("Enter the value to convert: ", (value) => {
        value = parseFloat(value);
        switch (parseInt(conversionType)) {
            case 1:
                console.log(`${value} feet = ${value * 12} inches`);
                break;
            case 2:
                console.log(`${value} feet = ${value * 0.3048} meters`);
                break;
            case 3:
                console.log(`${value} inches = ${value / 12} feet`);
                break;
            case 4:
                console.log(`${value} meters = ${value / 0.3048} feet`);
                break;
            default:
                console.log("Invalid option! Choose between 1-4.");
        }
        readline.close();
    });
});
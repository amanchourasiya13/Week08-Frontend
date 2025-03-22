//Find the Magic Number.
//HInt: Ask user input bw 1 to 100. then check if num less then n/2 or greater,repeat till magic number is reached.

const readline = require("readline-sync");

let low = 1, high = 100;
console.log("Think of a number between 1 to 100.");

while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let response = readline.question(`Is your number greater than ${mid}? (yes/no): `);

    if (response.toLowerCase() === "yes") {
        low = mid + 1;
    } else {
        high = mid;
    }
}

console.log(`Your magic number is: ${low}`);
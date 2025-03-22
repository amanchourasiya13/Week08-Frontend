//WAP that reads 5 Random 3 digit values and output the min and max value.
let numbers = [];
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 900) + 100; // Random 3-digit number (100 to 999)
    numbers.push(num);
}
console.log("Generated Numbers:", numbers);

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Minimum Value:", min);
console.log("Maximum Value:", max);
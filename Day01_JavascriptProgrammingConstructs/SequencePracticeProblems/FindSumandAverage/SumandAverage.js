//WAP that reads 5 Random 2 Digit Vslues,then find their sum and the average.
let sum = 0;
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 90) + 10; // Random 2-digit number (10 to 99)
    console.log("Random Number", i + 1, ":", num);
    sum += num;
}
let average = sum / 5;
console.log("Sum:", sum);
console.log("Average:", average);
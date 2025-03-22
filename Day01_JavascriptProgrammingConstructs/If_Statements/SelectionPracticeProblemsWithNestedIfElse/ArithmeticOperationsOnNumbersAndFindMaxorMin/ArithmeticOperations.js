//Enter 3 numbers ,do following arithmetic operation and find one that is maximum or minimum.

let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

console.log("a + b * c =", op1);
console.log("a % b + c =", op2);
console.log("c + a / b =", op3);
console.log("a * b + c =", op4);

// Finding Maximum
let max=Math.max(op1,op2,op3,op4);
// Finding Minimum 
let min=Math.min(op1,op2,op3,op4);

console.log("Maximum Value:", max);
console.log("Minimum Value:", min);
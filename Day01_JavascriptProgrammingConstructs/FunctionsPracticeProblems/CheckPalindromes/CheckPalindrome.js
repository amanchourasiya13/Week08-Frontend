// Write a function to check if the two numbers are palindromes.

const readline = require("readline-sync");
function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;

    while (num > 0) {
        let digit = num % 10;
        reversedNum = (reversedNum * 10) + digit;
        num = Math.floor(num / 10);
    }

    return originalNum === reversedNum;
}

let num1 = parseInt(readline.question("Enter first number: "));
let num2 = parseInt(readline.question("Enter second number: "));

console.log(`${num1} is ${isPalindrome(num1) ? "a Palindrome" : "not a Palindrome"}`);
console.log(`${num2} is ${isPalindrome(num2) ? "a Palindrome" : "not a Palindrome"}`);
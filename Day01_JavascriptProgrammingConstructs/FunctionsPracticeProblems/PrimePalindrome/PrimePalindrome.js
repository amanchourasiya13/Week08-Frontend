//Take num from user and check if number is prime then show that its palindrome is also prime.

const readline = require("readline-sync");

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    let reversedNum = 0;
    while (num > 0) {
        let digit = num % 10;
        reversedNum = (reversedNum * 10) + digit;
        num = Math.floor(num / 10);
    }
    return reversedNum;
}

let num = parseInt(readline.question("Enter a number: "));

if (isPrime(num)) {
    console.log(`${num} is a Prime Number.`);
    let palindromeNum = getPalindrome(num);
    console.log(`Palindrome of ${num} is ${palindromeNum}`);

    if (isPrime(palindromeNum)) {
        console.log(`Palindrome ${palindromeNum} is also a Prime Number.`);
    } else {
        console.log(`Palindrome ${palindromeNum} is NOT a Prime Number.`);
    }
} else {
    console.log(`${num} is NOT a Prime Number.`);
}
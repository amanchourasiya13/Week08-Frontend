//WAP gnerate 10 Random 3digit numm,store in array,then find 2nd largest and 2nd smallest element with use of Sorting.

function getRandom3DigitNumber() {
    return Math.floor(Math.random() * 900) + 100; // Generates a number between 100-999
}

// Generate an array of 10 random 3-digit numbers
let numbers = Array.from({ length: 10 }, getRandom3DigitNumber);
console.log("Generated Numbers:", numbers);

// Sort the array
numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", numbers);

// Get 2nd smallest and 2nd largest
let secondSmallest = numbers[1];
let secondLargest = numbers[numbers.length - 2];

console.log("Second Smallest:", secondSmallest);
console.log("Second Largest:", secondLargest);
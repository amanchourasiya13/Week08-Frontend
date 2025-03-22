//WAP gnerate 10 Random 3digit numm,store in array,then find 2nd largest and 2nd smallest element without sorting the array.
function getRandom3DigitNumber() {
    return Math.floor(Math.random() * 900) + 100; // Generates a number between 100 and 999
}

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Finding largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Finding smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

// Generating and storing 10 random numbers
let numbers = Array.from({ length: 10 }, getRandom3DigitNumber);
console.log("Generated Numbers:", numbers);

// Determining 2nd largest and 2nd smallest without sorting
let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(numbers);
console.log("Second Largest:", secondLargest);
console.log("Second Smallest:", secondSmallest);
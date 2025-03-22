//Extend the prime factorization program to store all prime factors of number n into array and finally display  output.

function primeFactors(n) {
    let factors = [];

    // Divide by 2 until odd
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    // Check odd factors
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    // If remaining n is prime
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

let num = 84;
console.log("Prime Factors of", num, ":", primeFactors(num));
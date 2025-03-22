//WAP to compute factors of num N using prime factorization method.

let n = parseInt(process.argv[2]); // Command-line input
console.log(`Prime factors of ${n}:`);

// Check for factor 2
while (n % 2 === 0) {
    console.log(2);
    n /= 2;
}

// Check for odd factors
for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
        console.log(i);
        n /= i;
    }
}

// If n is a prime number greater than 2
if (n > 2) {
    console.log(n);
}
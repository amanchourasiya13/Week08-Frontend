// WAP that takes cmd argument n and prints table of powers of 2 that less than or equal to 2^n till 256 is reached.

let n = parseInt(process.argv[2]); // Command-line input
let i = 0;
let value = 1;

console.log(`Powers of 2 up to 2^${n} (Max 256):`);
while (i <= n && value <= 256) {
    console.log(`2^${i} = ${value}`);
    value *= 2;
    i++;
}
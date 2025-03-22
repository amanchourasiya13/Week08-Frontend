//WAP that takes cmd argument n and prints table of power of 2 that less than equal to 2^n.

let n = parseInt(process.argv[2]); // Command-line input

console.log(`Powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
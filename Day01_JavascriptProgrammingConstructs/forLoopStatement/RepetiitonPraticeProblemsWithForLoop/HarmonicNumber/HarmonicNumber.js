//WAP that takes cmd argument n and prints nth harmonic number.harmonic no like: Hn=1\1+1\2+1\3+..1\n

let n = parseInt(process.argv[2]); // Command-line input
let harmonicNumber = 0;

for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
}

console.log(`Harmonic Number H(${n}) = ${harmonicNumber}`);
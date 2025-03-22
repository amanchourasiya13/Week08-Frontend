//WAP that takes day and month from command line and prints true if day of month is bw March 20 and june 20,false otherwise.
let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

console.log("Date - " + day + "/" + month);

let isValid = false;
if (month === 3) {
    if (day >= 20 && day <= 31) {
        isValid = true;
    }
} else if (month === 4) {
    if (day >= 1 && day <= 30) {
        isValid = true;
    }
} else if (month === 5) {
    if (day >= 1 && day <= 31) {
        isValid = true;
    }
} else if (month === 6) {
    if (day >= 1 && day <= 20) {
        isValid = true;
    }
}

console.log(isValid);

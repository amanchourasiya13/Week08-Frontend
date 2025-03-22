//Take a range from 0-100, find the digits that are repeated twice like 33,77,etc & store them in aaray.

function findRepeatedDigits() {
    let repeated = [];

    for (let i = 10; i <= 100; i++) {
        let str = i.toString();
        if (str[0] === str[1]) {
            repeated.push(i);
        }
    }

    return repeated;
}

console.log("Repeated digit numbers:", findRepeatedDigits());
function validateEmail(email) {
    let regex = /^abc@bridgelabz\.co$/;
    return regex.test(email);
}

console.log(validateEmail("abc@bridgelabz.co"));     // true
console.log(validateEmail("abc@bridgelabzcom"));    // false (missing dot before co)
console.log(validateEmail("abc@xyz.co"));           // false (missing 'bridgelabz')
console.log(validateEmail("xyz@bridgelabz.co"));    // false (does not start with abc)
console.log(validateEmail("abc@bridgelabz.in"));    // false (should be ".co" not ".in")

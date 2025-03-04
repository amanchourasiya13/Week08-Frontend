function validateEmail(email) {
    let regex = /^abc@bridgelabz\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

console.log(validateEmail("abc@bridgelabz.co"));      // true
console.log(validateEmail("abc@xyz.co"));            // false (missing 'bridgelabz')
console.log(validateEmail("xyz@bridgelabz.co"));     // false (does not start with abc)
console.log(validateEmail("abc.xyz@bridgelabz.co")); // true

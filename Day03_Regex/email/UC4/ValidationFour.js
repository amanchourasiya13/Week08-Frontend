function validateEmail(email) {
    let regex = /^abc([._+-][a-zA-Z0-9]+)?@bridgelabz\.co$/;
    return regex.test(email);
}

console.log(validateEmail("abc@bridgelabz.co"));         // ✅ Valid (without optional part)
console.log(validateEmail("abc.xyz@bridgelabz.co"));     // ✅ Valid (optional part with '.')
console.log(validateEmail("abc-xyz@bridgelabz.co"));     // ✅ Valid (optional part with '-')
console.log(validateEmail("abc+xyz@bridgelabz.co"));     // ✅ Valid (optional part with '+')
console.log(validateEmail("abc_xyz@bridgelabz.co"));     // ✅ Valid (optional part with '_')

console.log(validateEmail("abc@xyz@bridgelabz.co"));     // ❌ Invalid (extra @)
console.log(validateEmail("abc#xyz@bridgelabz.co"));     // ❌ Invalid ('#' not allowed)
console.log(validateEmail("abc..xyz@bridgelabz.co"));    // ❌ Invalid (consecutive dots not allowed)
console.log(validateEmail("abcxyz@bridgelabz.co"));      // ✅ Valid (optional part missing)
console.log(validateEmail("abc-@bridgelabz.co"));        // ❌ Invalid (special character without following text)

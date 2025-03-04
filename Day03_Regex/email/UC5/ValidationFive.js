function validateEmail(email) {
    let regex = /^abc([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    return regex.test(email);
}

console.log(validateEmail("abc@bridgelabz.co"));           // ✅ Valid (without country code)
console.log(validateEmail("abc@bridgelabz.co.in"));        // ✅ Valid (with country code)
console.log(validateEmail("abc.xyz@bridgelabz.co"));       // ✅ Valid (optional part without country code)
console.log(validateEmail("abc.xyz@bridgelabz.co.us"));    // ✅ Valid (optional part with country code)
console.log(validateEmail("abc-xyz@bridgelabz.co"));       // ✅ Valid (optional part with '-')
console.log(validateEmail("abc_xyz@bridgelabz.co.uk"));    // ✅ Valid (optional part with '_')

console.log(validateEmail("abc@bridgelabz.com"));         // ❌ Invalid (missing `.co`)
console.log(validateEmail("abc@bridgelabz.co.india"));    // ❌ Invalid (TLD longer than 2 characters)
console.log(validateEmail("abc@bridgelabz.co."));        // ❌ Invalid (dot without country code)
console.log(validateEmail("abc..xyz@bridgelabz.co.in")); // ❌ Invalid (consecutive dots not allowed)
console.log(validateEmail("abc+xyz@bridgelabz.co.1a"));  // ❌ Invalid (TLD must be only letters)


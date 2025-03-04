function validatePinCode(pin) {
    let regex = /^\d{6}$/;
    return regex.test(pin);
}

console.log(validatePinCode("400088")); // true
console.log(validatePinCode("12345"));  // false
console.log(validatePinCode("abcdef")); // false
console.log(validatePinCode("400088B")); // false
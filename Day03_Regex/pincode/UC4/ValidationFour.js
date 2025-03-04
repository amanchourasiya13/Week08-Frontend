function validatePinCode(pin) {
    let regex = /^[0-9]{3}\s?[0-9]{3}$/;  
    return regex.test(pin);
}

console.log(validatePinCode("400088"));   // true
console.log(validatePinCode("400 088"));  // true (allow one space only)
console.log(validatePinCode("A400088"));  // false
console.log(validatePinCode("400088B"));  // false
console.log(validatePinCode("40008A"));   // false
console.log(validatePinCode("#400088"));  // false
console.log(validatePinCode("40 0088"));  // false
console.log(validatePinCode("400  088")); // false (extra spaces not allowed)

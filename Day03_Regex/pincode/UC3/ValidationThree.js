function validatePinCode(pin) {
    let regex = /^[0-9]{6}$/;  
    return regex.test(pin);
}

console.log(validatePinCode("400088"));   // true
console.log(validatePinCode("A400088"));  // false
console.log(validatePinCode("400088B"));  // false
console.log(validatePinCode("#400088"));  // false
console.log(validatePinCode("40008A"));   // false

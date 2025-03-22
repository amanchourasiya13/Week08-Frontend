//Unit Conversion. 

// convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log("42 inches in feet:", feet);

// Convert rectangular plot dimensions from feet to meters
let lengthFeet = 60, widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log("60ft x 40ft in meters:", lengthMeters, "x", widthMeters);

// Calculate area of 25 such plots in acres
let singlePlotArea = lengthMeters * widthMeters;
let totalAreaMeters = singlePlotArea * 25;
let totalAreaAcres = totalAreaMeters * 0.000247105;
console.log("Area of 25 plots in acres:", totalAreaAcres);
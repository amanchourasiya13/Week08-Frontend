//Read a number 1,10,100,10000,etc and display unit ,ten,hundred,etc.

let num = parseInt(process.argv[2]); // Command-line input

switch (num) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("Lakh");
        break;
    default:
        console.log("Invalid Input! Enter 1, 10, 100, 1000, etc.");
}
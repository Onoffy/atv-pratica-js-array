const numbers = [12, 67, 3, 15];
const doubleArray = numbers.map(double);

function double(number){
    return number * 2;
};

console.log("[" + doubleArray + "]");
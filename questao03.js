const numbers = [3, 2, 9, 11, 10];
const oddNumbers = numbers.filter(selectOdds);

function selectOdds(number){
    return number % 2 != 0;
}

console.log(oddNumbers);
function printAndSum (start, stop){

    let numbers = '';
    let sum = 0;

    for (let i = start; i <= stop; i++){
        
        numbers += `${i} `;
        sum += i;
    }
console.log(numbers);
console.log(`Sum: ${sum}`);
}

printAndSum (5, 10);
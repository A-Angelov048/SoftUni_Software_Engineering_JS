function biggestOf3Numbers(n1, n2, n3) {

    let numbers = [n1, n2, n3];
    numbers.sort((a, b) => b - a);

    console.log(numbers[0]);

}

biggestOf3Numbers(-2, 7, 3);
console.log('------------');
biggestOf3Numbers(130, 5, 99);
console.log('------------');
biggestOf3Numbers(43, 43.2, 43.1);
console.log('------------');
biggestOf3Numbers(2, 2, 2);
console.log('------------');


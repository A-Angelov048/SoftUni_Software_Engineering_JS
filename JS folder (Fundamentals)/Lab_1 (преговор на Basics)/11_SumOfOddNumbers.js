function SumOfOddNumbers(numb) {

    let sum = 0;
    let countOdd = 0;

    for (let i = 1; i <= 100; i++) {

        if (i % 2 === 1 && countOdd !== numb) {
            countOdd++;
            sum += i;
            console.log(i);
        }
    }
    console.log(`Sum: ${sum}`);
}

SumOfOddNumbers(3)
SumOfOddNumbers(5)
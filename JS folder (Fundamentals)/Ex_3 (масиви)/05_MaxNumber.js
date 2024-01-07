function maxNumb(input) {

    let inputlength = input.length;
    let newArr = [];


    for (let i = 0; i < inputlength; i++) {

        let currentNumb = input[i];
        let flag = true;

        for (let j = i + 1; j < inputlength; j++) {

            let nextNumb = input[j];

            if (nextNumb >= currentNumb) {
                flag = false;
                break;
            }
        }

        if (flag) {
            newArr.push(currentNumb);
        }
    }
    console.log(newArr.join(' '));
}

maxNumb([1, 4, 3, 2]);
console.log('-------');
maxNumb([14, 24, 3, 19, 15, 17]);
console.log('-------');
maxNumb([41, 41, 34, 20]);
console.log('-------');
maxNumb([27, 19, 42, 2, 13, 45, 48]);
console.log('-------');
function reverseArray(numb, input){

    let newArr = [];

    for (let i = 0; i < numb; i++){
        newArr.push(input[i]);
        
    }

    newArr.reverse();
    console.log(newArr.join(' '));

}

reverseArray (3, [10, 20, 30, 40, 50]);
console.log('---------');
reverseArray (4, [-1, 20, 99, 5]);
console.log('---------');
reverseArray (2, [66, 43, 75, 89, 47]);
console.log('---------');
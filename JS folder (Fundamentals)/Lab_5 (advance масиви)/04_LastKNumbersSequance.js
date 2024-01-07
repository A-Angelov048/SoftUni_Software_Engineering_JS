function lastKNumbersSequance(n, k) {

    let newArr = [1];
    
    while (n > newArr.length) {

        let newArrElements = newArr.slice(-k);
        let sum = 0;
        for (let i = 0; i < newArrElements.length; i++) {

            let curentNumb = newArrElements[i];
            sum += curentNumb;
        }
        newArr.push(sum);
    }
    console.log(newArr.join(' '));
}

lastKNumbersSequance(6, 3);
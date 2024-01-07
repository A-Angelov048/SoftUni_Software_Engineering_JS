function specNumb(input) {

    let sum = 0;
    let special = 0;

    for (let i = 1; i <= input; i++) {
        i = String(i);

        for (let n = 0; n < i.length; n++){
            sum += Number(i[n]);
        }
        
        special = sum === 5 || sum === 7 || sum === 11 ? 'True' : 'False';
        console.log(`${i} -> ${special}`);
        sum = 0; 
    }
}

specNumb(15);
console.log('-----------');
specNumb(20);
console.log('-----------');
specNumb(30);
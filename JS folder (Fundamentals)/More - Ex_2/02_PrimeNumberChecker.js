function numbChecker(numb) {

    let flag = true;

    for (let i = 2; i < numb; i++) {

        if (numb % i === 0) {
            console.log('false');
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log('true');
    }
}

numbChecker(7);
console.log('------');
numbChecker(8);
console.log('------');
numbChecker(81);
console.log('------');
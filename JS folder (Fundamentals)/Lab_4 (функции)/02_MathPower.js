function mathPower(numb, pow) {

    let result = 1;

    for (let i = 0; i < pow; i++) {
        result *= numb;
    }

    return print(result);

    function print(value) {
        console.log(value);
    }
}

mathPower(2, 8);
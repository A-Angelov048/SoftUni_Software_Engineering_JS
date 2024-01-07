function divisor(numb1, numb2) {

    let GCD = numb1 % numb2;

    while (GCD !== 0) {

        numb1 = numb2;
        numb2 = GCD;
        GCD = numb1 % numb2;
    }
    console.log(numb2);
}


divisor(15, 5)
divisor(2154, 458)
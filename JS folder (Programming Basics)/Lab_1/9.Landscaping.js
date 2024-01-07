function landscaping(input){

    let squareMeters = Number(input[0] * 7.61);

    console.log(`The final price is: ${squareMeters - (0.18 * squareMeters)} lv.`);
    console.log(`The discount is: ${0.18 * squareMeters} lv.`);
}

landscaping(["550"]);
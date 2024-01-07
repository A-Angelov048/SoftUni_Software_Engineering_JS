function price (input){

    let dogsBag = Number(input[0] * 2.50);
    let catsBag = Number(input[1] * 4) + dogsBag;

    console.log(`${catsBag} lv.`);
}

price(["5", "4"]);


// function price (input){

//     let dogsBag = Number(input[0] * 2.50);
//     let catsBag = Number(input[1] * 4);
//     let finalPrice = dogsBag + catsBag

//     console.log(finalPrice);
// }

// price(["5", "4"])
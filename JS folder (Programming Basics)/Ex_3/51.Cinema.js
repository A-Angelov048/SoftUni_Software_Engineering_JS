function cinema(input) {

    let projection = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);

    let price = 0;
    
    if (projection === "Premiere") {
        price = row * column * 12;
        
    } else if (projection === "Normal") {
        price = row * column * 7.50;

    } else if (projection === "Discount")
        price = row * column * 5;
    

    console.log(`${price.toFixed(2)} leva`);
}

 cinema (["Discount", "12", "30"]);
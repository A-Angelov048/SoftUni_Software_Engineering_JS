// •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

function equipment(input){

    let yearPrice = Number(input[0]);

    let shoes = yearPrice * 0.6;
    let outfit = shoes * 0.8;
    let ball = outfit * 1/4;
    let accessories = ball * 1/5;

    let finalPrice = yearPrice + shoes + outfit + ball + accessories;

    console.log(finalPrice);
}

equipment(["365"]);
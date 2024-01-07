// •	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
// •	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
// •	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
// •	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]



function vegetable(input){

    let priceOfVegetable = Number(input[0]);
    let priceOfFruit = Number(input[1]);
    let kiloOfVegetable = Number(input[2]);
    let kiloOfFruit = Number(input[3]);

    let FinalPrice = (priceOfVegetable * kiloOfVegetable) + (priceOfFruit * kiloOfFruit);
    FinalPrice = FinalPrice / 1.94;

    console.log(FinalPrice.toFixed(2));

}


vegetable(["0.194", "19.4", "10", "10"]);
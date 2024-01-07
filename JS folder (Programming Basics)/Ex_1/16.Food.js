// •	Пилешко меню –  10.35 лв. 
// •	Меню с риба – 12.40 лв. 
// •	Вегетарианско меню  – 8.15 лв. 


function food(input){

    let chickenFood = Number(input[0]) * 10.35;
    let fishFood = Number(input[1]) * 12.40;
    let veganFood = Number(input[2]) * 8.15;

    let desertFood = (chickenFood + fishFood + veganFood) * 0.2;
    
    let orderPrice = chickenFood + fishFood + veganFood + desertFood + 2.50;

    console.log(orderPrice);

}

food(["2", "4", "3"]);
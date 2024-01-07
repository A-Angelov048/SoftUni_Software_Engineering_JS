function cat(input){

    let purcentFats = Number(input[0]);
    let purcentProtein = Number(input[1]);
    let purcentCarbohydrates = Number(input[2]);
    let numbCalories = Number(input[3]);
    let purcentWater = Number(input[4]);

    let fats = ((purcentFats / 100) * numbCalories) / 9;
    let protein = ((purcentProtein / 100) * numbCalories) / 4;
    let carbohydrates = ((purcentCarbohydrates / 100) * numbCalories) / 4;

    let calories =  numbCalories / (fats + protein + carbohydrates);
    calories *= (100 - purcentWater) / 100;

    console.log(calories.toFixed(4));


}

cat(["40", "40", "20", "3000", "40"])
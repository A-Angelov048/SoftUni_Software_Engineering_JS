function adAstra(data) {

    let regex = /([#]|[|])(?<itemName>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g
    let command = regex.exec(data);

    let foodInfo = [];
    let sumCalories = 0;

    while (command) {

        foodInfo.push([command.groups.itemName, command.groups.date, command.groups.calories]);
        sumCalories += Number(command.groups.calories);
        command = regex.exec(data);
    }

    let caloriesToDays = Math.floor(sumCalories / 2000);

    console.log(`You have food to last you for: ${caloriesToDays} days!`);

    for (let [item, bestBefore, nutrition] of foodInfo) {

        console.log(`Item: ${item}, Best before: ${bestBefore}, Nutrition: ${nutrition}`);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])

console.log('==================');

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
function mania(input){

    let groupNum = Number(input[0]);

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;

    for(i = 1 ; i <= groupNum; i++){
        let people = Number(input[i]);
        
        if (people <= 5){
            group1 += people;
        } else if (people <= 12){
            group2 += people;
        } else if (people <= 25){
            group3 += people;
        } else if (people <= 40){
            group4 += people;
        } else {
            group5 += people;
        }    
    }

    let numbPeople = group1 + group2 + group3 + group4 + group5;
    
    console.log(`${((group1 / numbPeople) * 100).toFixed(2)}%`);
    console.log(`${((group2 / numbPeople) * 100).toFixed(2)}%`);
    console.log(`${((group3 / numbPeople) * 100).toFixed(2)}%`);
    console.log(`${((group4 / numbPeople) * 100).toFixed(2)}%`);
    console.log(`${((group5 / numbPeople) * 100).toFixed(2)}%`);

}

mania (["5",
"25",
"41",
"31",
"250",
"6"])

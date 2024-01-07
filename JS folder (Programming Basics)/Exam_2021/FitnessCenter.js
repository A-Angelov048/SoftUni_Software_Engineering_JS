function fitness(input){

    let numbVisitors = Number(input[0]);
    
    let activityBack = 0;
    let activityChest = 0;
    let activityLegs = 0;
    let activityAbs = 0;
    let activityProteinShake = 0;
    let activityProteinBar = 0;

    
    
    for( let i = 1; i <= numbVisitors; i++){

        let activity = input[i];

        switch(activity){
            case "Back": activityBack++; break;
            case "Chest": activityChest++; break;
            case "Legs": activityLegs++; break;
            case "Abs": activityAbs++; break;
            case "Protein shake": activityProteinShake++; break;
            case "Protein bar": activityProteinBar++; break;
        }
    }

    let training = activityBack + activityChest + activityLegs + activityAbs;
    training = (training / numbVisitors) * 100;

    let clients = activityProteinShake + activityProteinBar;
    clients = (clients / numbVisitors) * 100;

    console.log(`${activityBack} - back`);
    console.log(`${activityChest} - chest`);
    console.log(`${activityLegs} - legs`);
    console.log(`${activityAbs} - abs`);
    console.log(`${activityProteinShake} - protein shake`);
    console.log(`${activityProteinBar} - protein bar`);
    console.log(`${training.toFixed(2)}% - work out`);
    console.log(`${clients.toFixed(2)}% - protein`);

}

fitness (["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])

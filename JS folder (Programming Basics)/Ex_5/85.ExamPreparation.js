function exam(input){

    let i = 0;

    let poorGrade = Number(input[i]);
    i++;
    let nameTask = input[i];
    i++;
    let grade = Number(input[i]);
    i++;

    let countTask = 0;
    let numbPoorGrade = 0;
    let nameLastTask = "";
    let averageGrade = 0;

    while(nameTask !== "Enough"){

        nameLastTask = nameTask
        countTask += 1;
        averageGrade += grade;
        
        if (grade <= 4){
            numbPoorGrade++;    
                if(numbPoorGrade === poorGrade){
                    console.log(`You need a break, ${poorGrade} poor grades.`);
                    break;
                }
        }
        nameTask = input[i];
        i++;
        grade = Number(input[i]);
        i++; 
        } 

    if(nameTask === "Enough"){

        console.log(`Average score: ${(averageGrade / countTask).toFixed(2)}`);
        console.log(`Number of problems: ${countTask}`);
        console.log(`Last problem: ${nameLastTask}`);
}

}
        
        
        

exam (["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])



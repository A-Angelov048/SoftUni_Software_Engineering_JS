function graduation(input){

    let name = input[0];
    let i = 1;
    let mark = Number(input[i]);

    let averageGrade = 0;
    let grade = 1;
    let excluded = 0;

    while (grade <= 12){

        mark = Number(input[i]);
        i++;

        if(mark >= 4){
        averageGrade += mark;
        grade++
        continue;
        }
        excluded++;
        if (excluded === 2){
            break;
        }
       
    } if (grade > 12){
        console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${grade} grade`);    
    } 
}

graduation (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])



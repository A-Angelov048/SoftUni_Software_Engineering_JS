function grades(input){


    let numbStudentsCameToExam = Number(input[0]);

    let failStudents = 0;
    let betwen3And4 = 0;
    let betwen4and5 = 0;
    let topStudents = 0;
    let averageGrade = 0;

    for(let i = 1; i <= numbStudentsCameToExam; i++){

        let grade = Number(input[i]);
        averageGrade += grade;

        if (grade <= 2.99){
            failStudents++;
        } else if (grade <= 3.99){
            betwen3And4++;
        } else if (grade <= 4.99){
            betwen4and5++;
        } else {
            topStudents++;
        }
    }

    let averageFail = failStudents / numbStudentsCameToExam * 100;
    let average4Student = betwen3And4 / numbStudentsCameToExam * 100;
    let average5Student = betwen4and5 / numbStudentsCameToExam * 100;
    let averageTopStudents = topStudents / numbStudentsCameToExam * 100;
    averageGrade /= numbStudentsCameToExam;

    console.log(`Top students: ${averageTopStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${average5Student.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${average4Student.toFixed(2)}%`);
    console.log(`Fail: ${averageFail.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
    
}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
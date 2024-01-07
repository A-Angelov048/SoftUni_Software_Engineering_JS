function schoolGrades(data) {

    let studentInfo = {};

    for (let line of data) {

        let [student, ...grades] = line.split(' ');
        grades = grades.map(Number)
        let gradesLength = grades.length;
        let averageGrade = 0;
        let counter = 0;

        for (let i = 0; i < gradesLength; i++) {
            averageGrade += grades[i];
            counter++;
        }

        if (studentInfo.hasOwnProperty(student)) {
            studentInfo[student][0] += averageGrade;
            studentInfo[student][1] += counter;
        } else {
            studentInfo[student] = [averageGrade, counter];
        }
    }

    debugger
    let sort = Object.entries(studentInfo).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [student, [grade, counter]] of sort) {
        console.log(`${student}: ${(grade / counter).toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])
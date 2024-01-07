function formatGrade(grade) {

    if (grade < 3) {
        return print('Fail (2)');
    } else if (grade >= 3 && grade < 3.50) {
        return print(`Poor (${grade.toFixed(2)})`);
    } else if (grade >= 3.50 && grade < 4.50) {
        return print(`Good (${grade.toFixed(2)})`);
    } else if (grade >= 4.50 && grade < 5.50) {
        return print(`Very good (${grade.toFixed(2)})`);
    } else {
        return print(`Excellent (${grade.toFixed(2)})`);
    }

    function print(str) {
        console.log(str);
    }
}

formatGrade(3.3);




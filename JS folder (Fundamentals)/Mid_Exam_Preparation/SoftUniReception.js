function softUniReception(arr) {

    let arrToNumb = arr.map(Number);


    let firstEmployeePerHour = arrToNumb[0];
    let secondEmployeePerHour = arrToNumb[1];
    let thirdEmployeePerHour = arrToNumb[2];
    let students = arrToNumb[3];

    let hoursCount = 0;
    let curentHelpedStudents = 0;

    while (curentHelpedStudents < students) {

        hoursCount++;

        if (hoursCount % 4 === 0 && hoursCount !== 0) {
            hoursCount++;
        }

        curentHelpedStudents += firstEmployeePerHour + secondEmployeePerHour + thirdEmployeePerHour;
    }
    console.log(`Time needed: ${hoursCount}h.`);
}

softUniReception(['3', '2', '5', '40']);
console.log('------');
softUniReception(['1', '2', '3', '45']);
console.log('------');
softUniReception(['5', '6', '4', '20']);
console.log('------');
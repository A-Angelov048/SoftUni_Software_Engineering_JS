function searchForANumber(numbArr, manipulationArr) {

    let manipulation = numbArr.slice(0, manipulationArr[0]);
    manipulation.splice(0, manipulationArr[1]);
    
    let searchNumber = manipulation.filter(i => i === manipulationArr[2]).length;

    console.log(`Number ${manipulationArr[2]} occurs ${searchNumber} times.`);
}

searchForANumber([7, 5, 5, 8, 2, 7],
    [3, 1, 5]);
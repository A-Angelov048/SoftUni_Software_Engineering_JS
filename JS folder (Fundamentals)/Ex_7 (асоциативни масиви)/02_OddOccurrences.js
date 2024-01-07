function oddOccurrences(data) {

    let dataOfObj = new Map()
    let dataToArr = data.split(' ').map(e => e.toLowerCase());
    let count = 0;

    for (let i of dataToArr) {
        for (let j of dataToArr) {

            if (i === j) {
                count++;
            }
        }

        if (count % 2 === 1) {
            dataOfObj.set(i); // чрез .set добавяме ключ и стойнот, ако не подадем стойност за нея връща undefined!
        }
        count = 0;
    }

    let newArr = [];

    for (let el of dataOfObj) {

        newArr.push(el[0]);

    }

    console.log(newArr.join(' '));
}


oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
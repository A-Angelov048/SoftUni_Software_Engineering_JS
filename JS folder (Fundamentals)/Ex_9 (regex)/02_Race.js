function race(data) {

    let listOfContestants = data.shift().split(', ');

    let regexName = /(?<name>[A-Za-z]+)/g;
    let regexKm = /(?<km>\d+)/g;
    let dataOfContestants = {};

    let i = 0;
    let command = data[i];

    while (command !== 'end of race') {


        let name = data[i].match(regexName).join('');
        let sumKm = data[i].match(regexKm).join('');
        sumKm = sumKm.split('').map(Number).reduce((numA, numB) => numA + numB);

        if (listOfContestants.includes(name)) {

            if (dataOfContestants.hasOwnProperty(name)) {
                dataOfContestants[name] += sumKm;
            } else {
                dataOfContestants[name] = sumKm;
            }
        }
        i++;
        command = data[i];
    }

    let sort = Object.entries(dataOfContestants).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sort[0][0]}`);
    console.log(`2nd place: ${sort[1][0]}`);
    console.log(`3rd place: ${sort[2][0]}`);

}


race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);


console.log('=================');

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'])
function aMinerTask(arr) {

    let infoResources = {};

    for (let i = 0; i < arr.length; i+=2) {

        let currentResource = arr[i];
        let currentquantity = Number(arr[i+1]);
        if (infoResources.hasOwnProperty(currentResource)) {
            infoResources[currentResource] += currentquantity ;
            sumCards = 0;
        } else {
            infoResources[currentResource] = currentquantity ;
            sumCards = 0;
        }
    }

    for (let line in infoResources){
        console.log(`${line} -> ${infoResources[line]}`);
    }
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])
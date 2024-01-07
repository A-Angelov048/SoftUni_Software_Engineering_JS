function partyTime(data) {

    let guestsListVip = {};
    let guestsListNormal = {};
    let countGuests = 0;
    let flag = true;
    let i = 0;

    for (let el of data) {

        if (el === 'PARTY') {
            flag = false;
            continue;
        }

        if (flag) {
            i++;
            if (isNaN(el[0])) {
                guestsListNormal[i] = el;
                countGuests++;
                continue;
            } else {
                guestsListVip[i] = el;
                countGuests++;
                continue;
            }
        }

        for (let [key, value] of Object.entries(guestsListVip)) {

            if (el === value) {
                delete guestsListVip[key];
                countGuests--;
                break;
            } 
        }
        for (let [key, value] of Object.entries(guestsListNormal)) {

            if (el === value) {
                delete guestsListNormal[key];
                countGuests--;
                break;
            } 
        }

    }

    console.log(countGuests);
    for (let guests of Object.entries(guestsListVip)) {
        console.log(guests[1]);
    }
    for (let guests of Object.entries(guestsListNormal)) {
        console.log(guests[1]);
    }
}


partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);
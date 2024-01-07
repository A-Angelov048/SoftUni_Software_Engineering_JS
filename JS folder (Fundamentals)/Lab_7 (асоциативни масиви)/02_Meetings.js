function meetings(data) {

    let meetings = {}

    for (let line of data) {

        let [day, name] = line.split(' ');

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [day, name] of Object.entries(meetings)){
        console.log(`${day} -> ${name}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])

console.log('===================');

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])
function mapper(data) {

    let regex = /([=]|[\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let match = regex.exec(data)

    let travelPoint = 0;
    let destination = [];

    while (match) {

        travelPoint += match.groups.destination.length;
        destination.push(match.groups.destination);
        match = regex.exec(data)
    }

    console.log(`Destinations: ${destination.join(', ')}`);
    console.log(`Travel Points: ${travelPoint}`);
}

mapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

console.log('=============');

mapper("ThisIs some InvalidInput");
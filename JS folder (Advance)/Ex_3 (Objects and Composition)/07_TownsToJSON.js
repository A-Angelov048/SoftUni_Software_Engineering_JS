function towns(data) {

    data.shift();
    objTowns = [];

    for (let line of data) {

        let trimPipes = line.split('|').join('').trim()
        let [town, latitude, longitude] = trimPipes.split('  ');
        latitude = Number(latitude);
        longitude = Number(longitude);
        objTowns.push({ 'Town': town, 'Latitude': Number(latitude.toFixed(2)), 'Longitude': Number(longitude.toFixed(2)) })
    }

    console.log(JSON.stringify(objTowns));
}

towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
console.log('==================');


function solve(input) {
    const towns = [];

    const regex = new RegExp(/\s*\|\s*/);
    for (const line of input.splice(1)) {
        let tokens = line.split(regex).filter(Boolean);
        towns.push({
            Town: tokens[0],
            Latitude: +Number(tokens[1]).toFixed(2),
            Longitude: +Number(tokens[2]).toFixed(2)
        });
    }

    console.log(JSON.stringify(towns));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])
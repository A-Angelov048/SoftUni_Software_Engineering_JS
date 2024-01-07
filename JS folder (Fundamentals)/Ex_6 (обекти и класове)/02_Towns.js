function towns(arr) {

    class Table {

        constructor(town, latitude, longitude) {

            this.town = town;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }

        result() {
            console.log(`{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`);
        }
    }

    for (let i of arr) {

        let [town, latitude, longitude] = i.split(' | ');
        let currentInfoTown = new Table(town, latitude, longitude);
        currentInfoTown.result();
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])
function movies(dataMovies) {

    let obj = []; // създавам масив в, който ще съхранявам обекти

    for (let i = 0; i < dataMovies.length; i++) {

        let currentData = dataMovies[i];

        if (currentData.includes('addMovie')) {

            let name = currentData.split('addMovie ')[1];
            obj.push({ name });

        } else if (currentData.includes('directedBy')) {

            let [name, director] = currentData.split(' directedBy ');
            let currentMovie = obj.find(n => n.name === name);

            if (currentMovie) { // проверявам дали името от входа съществува в масива от обекти, ако съществува добавям директора или датата към текущият обект в масива  
                currentMovie.director = director;
            }

        } else if (currentData.includes('onDate')) {

            let [name, date] = currentData.split(' onDate ');
            let currentMovie = obj.find(n => n.name === name);

            if (currentMovie) { // проверявам дали името от входа съществува в масива от обекти, ако съществува добавям директора или датата към текущият обект в масива
                currentMovie.date = date;
            }
        }
    }
    
    for (let j of obj) {

        if (j.name && j.director && j.date) { // проверявам дали са налични и трите обекта
            console.log(JSON.stringify(j));
        }
    }
}


movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);
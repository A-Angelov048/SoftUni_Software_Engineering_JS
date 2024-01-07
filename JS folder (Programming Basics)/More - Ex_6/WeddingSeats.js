function weddingSeats(input) {

    let sector = input[0];
    let numbLines = Number(input[1]);
    let numbSeatsOdd = Number(input[2]);

    let countseats = 0;
    let numbSeats = 96;

    for (let i = 65; i <= sector.charCodeAt(); i++) {
        for (let j = 1; j <= numbLines; j++) {

            if (j % 2 === 1) {
                numbSeats += numbSeatsOdd;
            } else if (j % 2 === 0) {
                numbSeats += (numbSeatsOdd + 2);
            }

            for (let n = 97; n <= numbSeats; n++) {
                countseats++
                let final = `${String.fromCharCode(i)}${j}${String.fromCharCode(n)}`
                console.log(final);
            }
            numbSeats = 96;
        }
        numbLines++;
    }

    console.log(countseats);

}

// weddingSeats(["B", "3", "2"]);
// weddingSeats(["C", "4", "2"]);
// weddingSeats(["E", "1", "3"]);
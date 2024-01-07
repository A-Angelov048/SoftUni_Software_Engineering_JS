function needToRead(input){

    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursNedPerDay = numberOfPages / pagesPerHour / days

    console.log(hoursNedPerDay);

}

needToRead(["212", "20", "2"]);
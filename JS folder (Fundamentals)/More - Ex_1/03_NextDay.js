function nextDay(inputYear, inputMonth, inputDay) {

    let date = new Date(inputYear, inputMonth - 1, inputDay + 1);

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    console.log(`${year}-${month + 1}-${day}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
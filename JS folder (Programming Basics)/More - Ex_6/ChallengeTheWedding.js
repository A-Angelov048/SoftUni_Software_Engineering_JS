function wedding(input) {

    let numbMens = Number(input[0]);
    let numbWomens = Number(input[1]);
    let maxTables = Number(input[2]);

    let countTables = 0;
    let date = ''

    for (let i = 1; i <= numbMens; i++) {
        for (let j = 1; j <= numbWomens; j++) {

            countTables++;
            if (countTables <= maxTables) {
                date += `(${i} <-> ${j})` + ' ';
            }
        }
    }

    console.log(date);

}

// wedding(['2', '2', '6']);
// wedding(['2', '2', '3']);
wedding(['5', '8', '40']);
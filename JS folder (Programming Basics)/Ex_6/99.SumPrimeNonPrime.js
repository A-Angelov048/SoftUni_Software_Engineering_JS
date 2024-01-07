function prime(input) {

    let i = 0;
    let command = input[i];
    i++;
    let primeNumb = 0;
    let notPrimeNumb = 0;

    while (command !== "stop") {

        let numb = Number(command);


        if (numb < 0) {
            console.log("Number is negative.");
            command = input[i];
            i++;
            continue;
        }

        let prime = true;
        for (let x = 2; x < numb; x++) {
            if (numb % x === 0) {
                prime = false;
                break;
            }
        }

        if (prime) {
            primeNumb += numb;
        } else {
            notPrimeNumb += numb;
        }

        command = input[i];
        i++;

    }
    console.log(`Sum of all prime numbers is: ${primeNumb}`);
    console.log(`Sum of all non prime numbers is: ${notPrimeNumb}`);
}

// prime(["30", "83", "33", "-1", "20", "stop"]);
prime(["2",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])





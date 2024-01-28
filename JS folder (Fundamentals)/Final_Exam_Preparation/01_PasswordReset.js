function passwordReset(data) {

    let password = data.shift();

    let i = 0;
    let command = data[i];
    i++;

    while (command !== 'Done') {

        let [curCommand, firstOperation, secondOperation] = command.split(' ');

        switch (curCommand) {

            case 'TakeOdd':
                let newPassword = ''
                for (let j = 0; j < password.length; j++) {

                    if (j % 2 === 1) {
                        newPassword += password[j];
                    }
                }
                password = newPassword;
                console.log(password);
                break;

            case 'Cut':
                firstOperation = Number(firstOperation);
                secondOperation = Number(secondOperation);

                let firstHalf = password.substring(0, firstOperation);
                let secondHalf = password.substring(firstOperation + secondOperation);
                password = firstHalf + secondHalf;
                console.log(password);
                break;

            case 'Substitute':
                if (password.includes(firstOperation)) {

                    while (password.includes(firstOperation)) {
                        password = password.replace(firstOperation, secondOperation)
                    }
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }

        command = data[i];
        i++;
    }
    console.log(`Your password is: ${password}`);

}


passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);

console.log('=====================');

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);
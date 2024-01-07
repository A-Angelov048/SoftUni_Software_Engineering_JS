function cinema(input){

    let i = 0;
    let command = input[i];
    i++;
    let freeSpace = Number(input[i]);
    i++;

    let countTickets = 0;
    let countStandardTi = 0;
    let countStudentTi = 0;
    let countKidTi = 0;

    while (command !== "Finish"){

        let nameMovie = command;
        let typeTickets = input[i];
        i++;
        
        switch(typeTickets){
            case "standard": countStandardTi++; countTickets++; break;
            case "student": countStudentTi++; countTickets++; break;
            case "kid": countKidTi++; countTickets++; break;
        }

        if(typeTickets === "End" || countTickets === freeSpace){
            let percent = (countTickets / freeSpace) * 100;
            console.log(`${nameMovie} - ${percent.toFixed(2)}% full.`);
            countTickets = 0;
            command = input[i];
            i++;
            freeSpace = Number(input[i]);
            i++;

        } else if(typeTickets === "Finish") {
            let percent = (countTickets / freeSpace) * 100;
            console.log(`${nameMovie} - ${percent.toFixed(2)}% full.`);
            command = typeTickets;
        }
    }

    let allTickets = countStandardTi + countStudentTi + countKidTi;
    let averageStandardTi = (countStandardTi / allTickets) * 100; 
    let averageStudentTi = (countStudentTi / allTickets) * 100; 
    let averageKidTi = (countKidTi / allTickets) * 100; 

    console.log(`Total tickets: ${allTickets}`);
    console.log(`${averageStudentTi.toFixed(2)}% student tickets.`);
    console.log(`${averageStandardTi.toFixed(2)}% standard tickets.`);
    console.log(`${averageKidTi.toFixed(2)}% kids tickets.`);

}

cinema (["Shutter Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"])


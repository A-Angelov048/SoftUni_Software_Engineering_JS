// function ticketForCinema(input) {

//     let day = input[0];

//     if (day === "Monday" || day === "Tuesday" || day === "Friday") {
//         console.log(12);
        
//     } else if (day === "Wednesday"  || day === "Thursday") {
//         console.log(14);
//     } else {
//         console.log(16);
//     }

    
// }

// ticketForCinema(["Saturday"]);



function ticketForCinema (input){

    let day = input[0];

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday": console.log(12); break;
        case "Wednesday":
        case "Thursday": console.log(14); break;
        default: console.log(16); break;
    
    }

}

ticketForCinema(["Wednesday"]);
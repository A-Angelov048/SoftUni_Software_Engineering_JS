function ageAndSex (input){

    let age = Number(input[0]);
    let sex = input[1];

    switch (age, sex) {
        case age >= "16" && "f": console.log("Ms."); break;
        case age >= "16" && "m": console.log("Mr."); break;
        case "f": console.log("Miss"); break;
        case "m": console.log("Master"); break;
        

    }

//     if (sex === "f") {
//         if (age >= 16){
//             console.log("Ms.");
//         } else {
//             console.log("Miss.");
//         }
        
//     } else {
//         if (age >= 16){
//             console.log("Mr.");
//         } else {
//             console.log("Master.");
//         }
//     }

}

ageAndSex(["15", "m"]);
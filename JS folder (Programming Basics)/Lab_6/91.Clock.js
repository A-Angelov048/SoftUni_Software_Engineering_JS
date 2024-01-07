function clock (){

    for (let hours = 0; hours < 24; hours++){
        for (let mins = 0; mins < 60; mins++){
           console.log(`${hours}:${mins}`); 
        }
    }
}

clock ();


// function clock (){

//     for (let hours = 0; hours < 24; hours++){
//         for (let mins = 0; mins < 60; mins++){
//             if (hours < 10){
//                 if (mins < 10){
//                     console.log(`0${hours}:0${mins}`);
//                 } else {
//                     console.log(`0${hours}:${mins}`);
//                 }
//             } else {
//                 if (mins < 10){
//                     console.log(`${hours}:0${mins}`);
//                 } else {
//                     console.log(`${hours}:${mins}`);
//                 }
//             }   
//         }
//     }
// }

// clock ();
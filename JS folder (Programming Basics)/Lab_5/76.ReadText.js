function read(input){
    
    let index = 0;
    let name = input[index];
    index++

    while (name !== "Stop") {
        console.log(name);
        name = input[index];
        index++;
        
    }

}

read(["Sofia",
"Berlin",
"Stop",
"AfterStop"])

// function read(input){
    
//     let index = 0;
//     let name = input[index];
    

//     while (name !== "Stop") {
//         name = input[index];
//         console.log(name);
//         index++
        
//     }

// }



//wrong way
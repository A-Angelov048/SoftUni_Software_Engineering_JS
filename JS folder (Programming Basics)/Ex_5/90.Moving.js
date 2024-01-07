function move(input){

    let i = 0;
    let lenghtFreeSpace = Number(input[i]);
    i++;
    let widhtFreeSpace = Number (input[i]);
    i++
    let heightFreeSpace = Number(input[i]);
    i++;

    let freeSpace = lenghtFreeSpace * widhtFreeSpace * heightFreeSpace;
    let boxSpace = 0;
    let doneFunction = input[i];

    while(doneFunction !== "Done"){
    
    let box = Number(input[i]);
    i++
    boxSpace += box
    doneFunction = input[i];

    if(boxSpace > freeSpace){
        break;
    }
}

    if (boxSpace > freeSpace){
        let neededSpace = boxSpace - freeSpace;
        console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
    } else {
        let leftSpace = freeSpace - boxSpace;
        console.log(`${leftSpace} Cubic meters left.`);
    }
}

move (["10", 
"1",
"2",
"4", 
"6",
"Done"])


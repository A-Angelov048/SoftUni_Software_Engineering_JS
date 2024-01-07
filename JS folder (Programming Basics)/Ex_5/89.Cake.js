function cake(input){

    let i = 0;
    let lenghtCake = Number(input[i]);
    i++;
    let widthCake = Number(input[i]);
    i++;
    let numbpieces = lenghtCake * widthCake

    while(0 < numbpieces){
        let stop = input[i];

        if (stop === "STOP"){
            break;
        }
        let takenpieces = Number(input[i]);
        numbpieces -= takenpieces;
        i++
    }

    if (numbpieces > 0){
        console.log(`${numbpieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(numbpieces)} pieces more.`);
    }

}

cake (["10",
"2",
"2",
"4",
"6",
"STOP"])




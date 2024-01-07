function seconds(input){

    let tFirst = Number(input[0]);
    let tSecond = Number(input[1]);
    let tThird = Number(input[2]);

    let totalTime = tFirst + tSecond + tThird;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60

    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);  
         
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

seconds(["35", "45", "44"]);
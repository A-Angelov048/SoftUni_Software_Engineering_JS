function time(input){

    let totalTime = Number(input[0]) * 60 + Number(input[1]) + 15;

    let hours = Math.floor(totalTime / 60);
    let minutes = totalTime % 60;

    if (hours === 24){
        hours = 0; 
    }

    if (minutes < 10){
        console.log(`${hours}:0${minutes}`);  
         
    } else {
        console.log(`${hours}:${minutes}`);
    }

}

time(["23", "30"]);
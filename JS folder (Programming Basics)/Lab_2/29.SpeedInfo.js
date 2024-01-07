function speed(input){

    let infoSpeedBe = Number(input[0]);
    
    if (infoSpeedBe <= 10){
        console.log("slow");
    } else if (infoSpeedBe <=50){
        console.log("average");
    } else if (infoSpeedBe <=150){
        console.log("fast");
    } else if (infoSpeedBe <=1000){
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }

}

speed(["8"])
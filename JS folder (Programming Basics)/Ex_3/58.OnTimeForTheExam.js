function student(input){

    let hourForExam = Number(input[0]);
    let minForExam = Number(input[1]);
    let hourForArive = Number(input[2]);
    let minForArive = Number(input[3]);

    hourForExam *= 60;
    hourForArive *= 60;

    let totalTimeExam = hourForExam + minForExam;
    let totalTimeArive = hourForArive + minForArive;

    let earlyOrOnTime = 0;
    let lateOnTime = 0;

    if (totalTimeExam >= totalTimeArive){
        earlyOrOnTime = totalTimeExam - totalTimeArive;
    } else if (totalTimeArive >= totalTimeExam){
        lateOnTime = totalTimeArive - totalTimeExam;
    }
    


    if (lateOnTime) {
    let hours = Math.floor(lateOnTime / 60);
    let minutes = lateOnTime % 60;
    if (hours === 0){
        console.log("Late");
        console.log(`${minutes} minutes after the start`);  
    }
    else if (minutes < 10){
        console.log("Late");
        console.log(`${hours}:0${minutes} hours after the start`);       
    } else {
        console.log("Late");
        console.log(`${hours}:${minutes} hours after the start`);
    }

    }else if (earlyOrOnTime === 0){
        console.log("On time");

    } else if (earlyOrOnTime < 31){
        console.log("On time");
        console.log(`${earlyOrOnTime} minutes before the start`);

    } else if  (earlyOrOnTime >= 30 && earlyOrOnTime <=59){
        console.log("Early");
        console.log(`${earlyOrOnTime} minutes before the start`);

    } else if (earlyOrOnTime >= 60){
        let hours = Math.floor(earlyOrOnTime / 60);
        let minutes = earlyOrOnTime % 60;
        if (minutes < 10){
            console.log("Early");
            console.log(`${hours}:0${minutes} hours before the start`);  
             
        } else {
            console.log("Early");
            console.log(`${hours}:${minutes} hours before the start`);
        }
    }
    
}

student (["9", "0", "8", "30"]);
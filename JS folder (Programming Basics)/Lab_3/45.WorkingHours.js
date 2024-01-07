function workingDay(input) {

    let hour = Number(input[0]);
    let dayOfTheWeek = input[1];
    
    switch (dayOfTheWeek) {
        case "Monday": 
        case "Tuesday": 
        case "Wednesday": 
        case "Thursday": 
        case "Friday": 
        case "Saturday":  
            break;
        
    }

    if ((hour >= 10 && hour <= 18) && (dayOfTheWeek !== "Sunday") ) {
        console.log("open");
    } else {
        console.log("closed");
    }

    
}

workingDay (["12", "Friday"]);
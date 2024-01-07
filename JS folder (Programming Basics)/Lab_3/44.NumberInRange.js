function numb(input) {

    let interval = Number(input[0]);

    let trueOrFalse = interval >= -100 && interval <= 100 && interval !== 0;

    if (trueOrFalse) {
        console.log("Yes");
    } else {
        console.log("No");
    }

    
}

numb(["-10"]);
function calc(input){

    let cal = (Number(input[0]) + Number(input[1])) * (Number(input[2] /2));
    cal = cal.toFixed(2);

    console.log(cal);
  
}

calc(["8", "13", "7"]);
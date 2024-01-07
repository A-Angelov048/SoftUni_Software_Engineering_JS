function pyramid(input){

let numb = Number(input[0]);
let current = 1;
let isBigger = false;
let print = "";


for(let x = 1; x <= numb; x++){
    for(let y = 1; y <= x; y++){
        if(current > numb){
            isBigger = true;
            break;
        }
        print += current + " ";
        current++
    }
    console.log(print)
    print = "";
    if(isBigger){
        break;
    }
}
}

pyramid (["7"]);
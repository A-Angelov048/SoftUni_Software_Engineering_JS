function build(input){

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for(let a = floors; a >= 1; a--){
        let print = "";
        for(let b = 0; b < rooms; b++){
            if (a === floors){
                print += "L" + a + b + " ";
            } else if (a % 2 === 0) {
                print += "O" + a + b + " ";
            } else {
                print += "A" + a + b + " ";
            }  
        }
        console.log(print);
    }
}

build (["6", "4"]);
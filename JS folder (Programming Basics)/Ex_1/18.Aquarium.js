function aquarium(input){

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let needLiters = (length * width * height) * 0.001;
    needLiters = needLiters * (1 - percent);

    console.log(needLiters);
}

aquarium(["85", "75", "47", "17"]);
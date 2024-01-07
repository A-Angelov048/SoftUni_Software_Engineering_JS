function arrayRotation(input, rotation){

    for (let i = 1; i <= rotation; i++){

        let firstElement = input.shift();
        input.push(firstElement);
    }
console.log(input.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
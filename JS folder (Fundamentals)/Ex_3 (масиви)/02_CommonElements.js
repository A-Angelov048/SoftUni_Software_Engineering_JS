function commonElements(input1, input2) {

    // for (let i = 0; i < input1.length; i++) {

    //     for (let j = 0; j < input2.length; j++) {

    //         if (input1[i] === input2[j]) {
    //             console.log(input1[i]);
    //         }
    //     }
    // }


    for (let i = 0; i < input1.length; i++) {

        if (input2.includes(input1[i])) {
            console.log(input1[i]);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
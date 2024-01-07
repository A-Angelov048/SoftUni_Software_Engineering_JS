function cutAndReverse(data) {

    let sideA = data.substring(0, data.length / 2).split('').reverse()
    let sideB = data.substring(data.length / 2).split('').reverse()

    console.log(sideA.join(''));
    console.log(sideB.join(''));

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
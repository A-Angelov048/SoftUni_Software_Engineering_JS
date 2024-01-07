function equalSums(arr) {

    let leftSum = 0;
    let rigthSum = 0;
    let arrLength = arr.length;
    let isEqual = false;

    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength; j++) {

            if (j !== i) {
                let num = arr[j];
                if (j < i) {
                    leftSum += num;
                } else if (j > i) {
                    rigthSum += num;
                }
            }
            if (i === 0) {
                leftSum = 0;
            } else if (i === arrLength - 1) {
                rigthSum === 0;
            }
        }

        if (leftSum === rigthSum) {
            console.log(i);
            isEqual = true;
            break;
        } else {
            leftSum = 0;
            rigthSum = 0;
        }
    }

    if (!isEqual) {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);
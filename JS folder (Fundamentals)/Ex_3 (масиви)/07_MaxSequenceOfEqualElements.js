function equalElements(arr) {

    let arrlength = arr.length;
    let minEqualElements = 1;
    let maxEqualElements = 0;
    let index = 0;

    for (let i = 0; i < arrlength; i++) {
        let currentNumb = arr[i];

        for (let j = i + 1; j < arrlength; j++) {
            let nextNumb = arr[j];

            if (currentNumb === nextNumb) {
                minEqualElements++;

                if (minEqualElements > maxEqualElements) {
                    maxEqualElements = minEqualElements;
                    index = currentNumb;
                }
            } else {
                minEqualElements = 1;
                break;
            }
        }
    }
    console.log(`${(index + ' ').repeat(maxEqualElements)}`);
}

equalElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
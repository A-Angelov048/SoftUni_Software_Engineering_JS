function theAngryCat(arr, index, typeOfItem) {

    let entrypoint = arr[index];
    let rigthSide = arr.splice(index + 1);
    let leftSide = arr.splice(0, index);
    let sumLeft = 0;
    let sumRight = 0;
    let compareLeft = 0;
    let compareRight = 0;

    switch (typeOfItem) {
        case 'cheap':
            for (const i of rigthSide) {

                sumRight += i;
                if (sumRight < entrypoint) {
                    compareRight = sumRight;
                }
            }

            for (const j of leftSide) {

                sumLeft += j;
                if (sumLeft < entrypoint) {
                    compareLeft = sumLeft;
                }
            }
            break;

        case 'expensive':
            for (const o of rigthSide) {

                sumRight += o;
                if (sumRight > entrypoint) {
                    compareRight = sumRight;
                }
            }
            
            for (const k of leftSide) {

                sumLeft += k;
                if (sumLeft > entrypoint) {
                    compareLeft = sumLeft;
                }
            }
            break;
    }

    if (compareLeft === compareRight) {
        return console.log(`Left - ${compareLeft}`);
    }

    if (compareLeft >= compareRight) {
        console.log(`Left - ${compareLeft}`);
    } else if (compareRight >= compareLeft) {
        console.log(`Right - ${compareRight}`);
    }
}


theAngryCat([1, 5, 1], 1, "cheap");
console.log('==============');
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
console.log('==============');
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
console.log('==============');

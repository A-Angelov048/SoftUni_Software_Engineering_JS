function cooking(numb, ...list) {

    let myNumb = Number(numb);

    for (let line of list) {

        switch (line) {

            case 'chop': myNumb /= 2;break;
            case 'dice': myNumb = Math.sqrt(myNumb);break;
            case 'spice': myNumb += 1;break;
            case 'bake': myNumb *= 3;break;
            case 'fillet': myNumb *= 0.8;break;
        }
        console.log(myNumb);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('=================================');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
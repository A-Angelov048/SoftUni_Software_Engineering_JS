function triangleArea(side1, side2, side3) {

    let semi = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(semi * (semi - side1) * (semi - side2) * (semi - side3));

    console.log(area);

}

triangleArea(2, 3.5, 4);
console.log('--------');
triangleArea(3, 5.5, 4);
console.log('--------');
function rectangle(width, height, color) {

    color = color[0].toUpperCase() + color.substring(1);

    let rect = {
        width,
        height,
        color,
        calcArea: (() => {
            return width * height
        })
    }

    // rect.getArea = () => {
    //     return rect.width * rect.height;
    // };

    return rect
}

let rect = rectangle(4, 5, 'red');


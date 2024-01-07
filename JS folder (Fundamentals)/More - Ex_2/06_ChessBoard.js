function chessBoard(input) {

    let result = '<div class="chessboard">' + '\n';

    for (let i = 1; i <= input; i++) {

        if (i % 2 === 1) {

            result += '  <div>' + '\n';
            for (let u = 1; u <= input; u++) {

                if (u % 2 === 1) {
                    result += '    <span class="black"></span>' + '\n';
                } else {
                    result += '    <span class="white"></span>' + '\n';
                }
            }
            result += '  </div>' + '\n';

        } else {

            result += '  <div>' + '\n';
            for (let h = 1; h <= input; h++) {

                if (h % 2 === 0) {
                    result += '    <span class="black"></span>' + '\n';
                } else {
                    result += '    <span class="white"></span>' + '\n';
                }
            }
            result += '  </div>' + '\n';

        }

        if (i === input) {
            result += '</div>'
        }
    }
    console.log(result);
}

chessBoard(3);
console.log('------');
chessBoard(6);
console.log('------');
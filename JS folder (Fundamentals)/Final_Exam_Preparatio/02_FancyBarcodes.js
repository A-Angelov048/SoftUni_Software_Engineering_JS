function fancyBarcodes(data) {

    let numbBarcodes = Number(data.shift());
    let regex = /[@][#]+(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z])[@][#]+/

    for (let i = 0; i < numbBarcodes; i++) {

        let match = data[i].match(regex)

        if (match) {

            let regexDigit = /(\d+)/g
            let matchDigit = data[i].match(regexDigit);

            if (matchDigit) {
                console.log(`Product group: ${matchDigit.join('')}`);
            } else {
                console.log('Product group: 00');
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Chdsa2312dsa231e4s6E@##"]);

console.log('================');

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);

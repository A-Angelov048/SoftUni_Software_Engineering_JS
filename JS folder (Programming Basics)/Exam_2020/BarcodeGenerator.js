function barcodeGenerator(input){

let startNumb = input[0];
let endNumb = input[1];

let s1Numb = Number(startNumb[0]);
let s2Numb = Number(startNumb[1]);
let s3Numb = Number(startNumb[2]);
let s4Numb = Number(startNumb[3]);
let e1Numb = Number(endNumb[0]);
let e2Numb = Number(endNumb[1]);
let e3Numb = Number(endNumb[2]);
let e4Numb = Number(endNumb[3]);

let barcode = "";

for(let i = s1Numb; i <= e1Numb; i++){
    for(let j = s2Numb; j <= e2Numb; j++){
        for(let n = s3Numb; n <= e3Numb; n++){
            for(let y = s4Numb; y <= e4Numb; y++)
                if (i % 2 !== 0 && j % 2 !== 0 && n % 2 !== 0 && y % 2 !== 0) {
                    barcode += `${i}${j}${n}${y} `;
                }
        }
    }
    
}

console.log(barcode);

}

barcodeGenerator (["3256",
"6579"])

function histogram (input){

    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (i = 1; i <= n; i++){
        let count = Number(input[i]);

        if (count < 200){
            p1++;
        } else if (count <= 399){
            p2++;
        } else if (count <= 599){
            p3++;
        } else if (count <= 799){
            p4++;
        } else {
            p5++;
        }
    }

        let p1Procent = (p1 / n) * 100;
        let p2Procent = (p2 / n) * 100;
        let p3Procent = (p3 / n) * 100;
        let p4Procent = (p4 / n) * 100;
        let p5Procent = (p5 / n) * 100;

        console.log(`${p1Procent.toFixed(2)}%`);
        console.log(`${p2Procent.toFixed(2)}%`);
        console.log(`${p3Procent.toFixed(2)}%`);
        console.log(`${p4Procent.toFixed(2)}%`);
        console.log(`${p5Procent.toFixed(2)}%`);
}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"]);


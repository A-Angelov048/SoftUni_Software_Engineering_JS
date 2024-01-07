function profit(input) {

    let coins1 = Number(input[0]);
    let coins2 = Number(input[1]);
    let paperMoney = Number(input[2]);
    let finalMoney = Number(input[3]);

    let ifFinalMoney = 0;

    for (let i = 0; i <= coins1; i++) {
        for (let j = 0; j <= coins2; j++) {
            for (let n = 0; n <= paperMoney; n++) { 

                let money = i;
                let money1 = j * 2;
                let money2 = n * 5;
                
                ifFinalMoney = money + money1 + money2;

                if (ifFinalMoney === finalMoney){
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${n} * 5 lv. = ${finalMoney} lv.`);
                }
            }
        }
    }
}


// profit(['3', '2', '3', '10']);
profit(['5', '3', '1', '7']);
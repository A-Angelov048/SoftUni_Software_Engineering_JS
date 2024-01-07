// сума = депозирана сума [0]  + срок на депозита [1] * ((депозирана сума * годишен лихвен процент [2] ) / 12)

function calc(input){

    let amountDeposited = Number(input[0]);
    let term = Number(input[1]);
    let interestRate = Number(input[2]) / 100;
    let finalPrice = amountDeposited + term * (amountDeposited * interestRate /12);

    console.log(finalPrice);

}

calc(["200", "3", "5.7"]);
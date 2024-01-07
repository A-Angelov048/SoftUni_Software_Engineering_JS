function calculator() {

    let firstNumb;
    let secondNumb;
    let result;

    return {

        init: function (numb1Ref, numb2Ref, resRef) {
            firstNumb = document.querySelector(numb1Ref);
            secondNumb = document.querySelector(numb2Ref);
            result = document.querySelector(resRef);
        },

        add: function () {
            const sumA = Number(firstNumb.value);
            const sumB = Number(secondNumb.value);
            result.value = sumA + sumB;
        },

        subtract: function () {
            const subA = Number(firstNumb.value);
            const subB = Number(secondNumb.value);
            result.value = subA - subB;
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');







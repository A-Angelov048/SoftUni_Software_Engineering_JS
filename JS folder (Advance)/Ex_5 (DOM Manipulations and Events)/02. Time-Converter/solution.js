function attachEventsListeners() {

    let button = Array.from(document.querySelectorAll('input[type=button]'));
    let inputs = document.querySelectorAll('input[type=text]')

    button.forEach(button => button.addEventListener('click', onClick))

    function onClick(e) {
        let value = Number(e.target.parentElement.children[1].value);
        let unit = e.target.parentElement.children[1].id;

        switch (unit) {

            case 'days': sumValue(value); break;
            case 'hours': sumValue(value / 24); break;
            case 'minutes': sumValue(value / 24 / 60); break;
            case 'seconds': sumValue(value / 24 / 60 / 60); break;
        }

        function sumValue(sum) {

            inputs[0].value = sum;
            let curValue = sum * 24;

            for (let i = 1; i < inputs.length; i++) {

                let input = inputs[i];
                input.value = curValue;
                curValue *= 60;
            }
        }
    }
}
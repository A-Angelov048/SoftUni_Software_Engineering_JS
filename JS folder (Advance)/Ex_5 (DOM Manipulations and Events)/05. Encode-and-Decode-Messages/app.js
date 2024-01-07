function encodeAndDecodeMessages() {

    const buttonEncode = document.getElementsByTagName('button')[0].addEventListener('click', encode);
    const buttonDecode = document.getElementsByTagName('button')[1].addEventListener('click', decode);
    const input = document.querySelector('textarea[placeholder]');
    const output = document.querySelector('textarea[disabled]');

    function encode() {
        
        const text = input.value.split('');
        const encodeText = text.map(char => {

            let toASCII = char.charCodeAt() + 1;
            return String.fromCharCode(toASCII);
        }).join('');

        output.value = encodeText;
        input.value = '';
    }

    function decode() {

        const encodeText = output.value.split('');
        const decodeText = encodeText.map(char => {

            let toASCII = char.charCodeAt() - 1;
            return String.fromCharCode(toASCII);
        }).join('');

        output.value = decodeText;
    }
}
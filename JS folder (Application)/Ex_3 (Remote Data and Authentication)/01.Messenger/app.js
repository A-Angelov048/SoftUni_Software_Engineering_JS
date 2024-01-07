function attachEvents() {

    document.querySelector('#submit').addEventListener('click', sendMessage);
    document.querySelector('#refresh').addEventListener('click', refreshMessage);

    const nameInput = document.querySelector('[name="author"]');
    const messageInput = document.querySelector('[name="content"]');
    const textArea = document.querySelector('#messages');

    const url = 'http://localhost:3030/jsonstore/messenger';

    async function refreshMessage() {

        const arrMessage = [];

        const response = await fetch(url);
        const data = await response.json();

        for (let line of Object.values(data)) {
            arrMessage.push(`${line.author}: ${line.content}`);
        }

        textArea.textContent = arrMessage.join('\n');
    }

    async function sendMessage() {
        debugger
        const options = {
            author: nameInput.value,
            content: messageInput.value
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(options)
        })
    }
}

attachEvents();
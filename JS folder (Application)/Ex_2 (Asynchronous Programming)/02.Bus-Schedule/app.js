function solve() {

    let nextStop = 'depot';
    let busStop = '';
    const url = 'http://localhost:3030/jsonstore/bus/schedule/';
    const buttonDepart = document.querySelector('#depart');
    const buttonArrive = document.querySelector('#arrive');
    const info = document.querySelector('.info');

    function depart() {

        const departBus = fetch(url + nextStop);
        debugger
        departBus.then(response => response.json())
            .then(data => {
                busStop = data.name;
                nextStop = data.next;
                info.textContent = `Next stop ${busStop}`;
            })

        buttonDepart.disabled = true;
        buttonArrive.disabled = false;
    }

    function arrive() {

        info.textContent = `Arriving at ${busStop}`;

        buttonArrive.disabled = true;
        buttonDepart.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
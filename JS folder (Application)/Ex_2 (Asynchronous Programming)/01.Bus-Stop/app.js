function getInfo() {

    const stopName = document.querySelector('#stopName');
    const buses = document.querySelector('#buses');
    const url = 'http://localhost:3030/jsonstore/bus/businfo/';
    const inputValue = document.querySelector('#stopId').value;

    const promiseBus = fetch(url + inputValue);
    promiseBus.then(response => response.json())
        .then(data => {
            buses.innerHTML ='';
            let stopNameBus = data.name;
            let curBuses = data.buses;

            stopName.textContent = stopNameBus;

            for (let line in curBuses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${line} arrives in ${curBuses[line]} minutes`;
                buses.appendChild(li);
            }
        })
        .catch(error => { 
            stopName.textContent = 'Error';
            buses.innerHTML = '';
        })
}
function tickets(arr, sortingString) {

    newArrOBJ = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let line of arr) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        let curTicket = new Ticket(destination, price, status);
        newArrOBJ.push(curTicket);
    }

    let sort = sortingString === 'price' ?
        newArrOBJ.sort((a, b) => a[sortingString] - b[sortingString]) : newArrOBJ.sort((a, b) => a[sortingString].localeCompare(b[sortingString]));

    debugger
    return sort;
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
   
    'destination'
));

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|available',
    'Philadelphia|132.20|departed',
    'Chicago|140.20|available',
    'Dallas|144.60|sold',
    'New York City|206.20|sold',
    'New York City|240.20|departed',
    'New York City|305.20|departed'],
    'price'));
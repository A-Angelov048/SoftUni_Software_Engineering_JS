class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {

        let findFlight = this.flights.find(f => f.flightNumber === flightNumber);

        if (!findFlight) {
            this.flights.push({ 'flightNumber': flightNumber, 'destination': destination, 'departureTime': departureTime, 'price': Number(price) });
            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        }
        return `Flight ${flightNumber} to ${destination} is already available.`
    }

    bookFlight(passengerName, flightNumber) {

        let findFlight = this.flights.find(f => f.flightNumber === flightNumber);

        if (!findFlight) return `Flight ${flightNumber} is not available for booking.`

        this.bookings.push({ 'passengerName': passengerName, 'flightNumber': flightNumber, 'price': findFlight.price });
        this.bookingsCount++;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
    }

    cancelBooking(passengerName, flightNumber) {

        let findFlight = this.bookings.find(f => f.flightNumber === flightNumber && f.passengerName === passengerName);

        if (!findFlight) return `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`

        let index = this.bookings.indexOf(findFlight);
        this.bookings.splice(index, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {

        if (this.bookings.length <= 0) throw new Error(`No bookings have been made yet.`);
        
        let cheapFlights = this.bookings.filter(x => x.price <= 100);
        let expensiveFlights = this.bookings.filter(x => x.price > 100);

        switch (criteria) {
            case 'all':
                const arrAll = [`All bookings(${this.bookingsCount}):`];

                for (let line of this.bookings) {
                    arrAll.push(`${line.passengerName} booked for flight ${line.flightNumber}.`);
                }
                return arrAll.join('\n');

            case 'cheap':
                const arrCheap = ['Cheap bookings:'];

                if (cheapFlights.length <= 0) return 'No cheap bookings found.';

                for (let line of cheapFlights) {
                    arrCheap.push(`${line.passengerName} booked for flight ${line.flightNumber}.`)
                }
                return arrCheap.join('\n');

            case 'expensive':
                const arrExpensive = ['Expensive bookings:'];

                if (expensiveFlights.length <= 0) return 'No expensive bookings found.';

                for (let line of expensiveFlights) {
                    arrExpensive.push(`${line.passengerName} booked for flight ${line.flightNumber}.`)
                }
                return arrExpensive.join('\n');
        }
    }
}



// // test addFlight
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// // test bookFlight
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));

// // test cancelBooking
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Ben", "AA101"));
// console.log(system.bookFlight("Peter", "AA101"));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));
// console.log(system.cancelBooking("Alice", "AA101"));
// console.log(system.cancelBooking("Peter", "AA101"));

// // test showBookings
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));
// console.log(system.showBookings("all"));

// test showBookings
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 100));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 100));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));






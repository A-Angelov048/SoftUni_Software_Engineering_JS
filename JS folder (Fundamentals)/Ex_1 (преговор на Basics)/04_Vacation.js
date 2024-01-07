function vacation(persons, group, day) {

    let price = 0;

    switch (group) {
        case 'Students':

            switch (day) {
                case 'Friday': price = persons * 8.45; break;
                case 'Saturday': price = persons * 9.80; break;
                case 'Sunday': price = persons * 10.46; break;
            }
            if (persons >= 30) {
                price *= 0.85;
            }
            break;

        case 'Business':

            if (persons >= 100) {
                persons -= 10;
            }
            switch (day) {
                case 'Friday': price = persons * 10.90; break;
                case 'Saturday': price = persons * 15.60; break;
                case 'Sunday': price = persons * 16; break;
            }
            break;

        case 'Regular':

            switch (day) {
                case 'Friday': price = persons * 15; break;
                case 'Saturday': price = persons * 20; break;
                case 'Sunday': price = persons * 22.50; break;
            }
            if (persons >= 10 && persons <= 20) {
                price *= 0.95;
            }
            break;
    }
console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
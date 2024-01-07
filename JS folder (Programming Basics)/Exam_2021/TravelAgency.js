function travel(input) {

    let nameCity = input[0];
    let packet = input[1];
    let vip = input[2];
    let days = Number(input[3]);

    let finalPrice = 0;

    if (days <= 0) {
        console.log("Days must be positive number!");
        return;
    }

    if (days > 7) {
        days--;
    }

    switch (nameCity) {
        case "Borovets":
        case "Bansko":

            switch (packet) {
                case "withEquipment": finalPrice = days * 100;
                    if (vip === "yes") {
                        finalPrice *= 0.9
                    }
                    break;
                case "noEquipment": finalPrice = days * 80;
                    if (vip === "yes") {
                        finalPrice *= 0.95
                    }
                    break;
                default: console.log("Invalid input!"); return;
            }

            break;

        case "Varna":
        case "Burgas":

            switch (packet) {
                case "withBreakfast": finalPrice = days * 130;
                    if (vip === "yes") {
                        finalPrice *= 0.88
                    }
                    break;
                case "noBreakfast": finalPrice = days * 100;
                    if (vip === "yes") {
                        finalPrice *= 0.93
                    }
                    break;
                default: console.log("Invalid input!"); return;
            }

            break;

        default: console.log("Invalid input!"); return;
    }

    console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
}

travel(["Borovets",
    "noEquipment",
    "yes",
    "8"])









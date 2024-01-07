function barIncome(data) {

    let regex = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>[\d]+.?\d*)\$/g;
    let customerInfo = regex.exec(data);
    let totalPrice = 0;

    while (customerInfo) {

        let customerName = customerInfo.groups.name;
        let cutomerProduct = customerInfo.groups.product;
        let customerSpend = customerInfo.groups.count * customerInfo.groups.price;
        totalPrice += customerSpend;

        console.log(`${customerName}: ${cutomerProduct} - ${customerSpend.toFixed(2)}`);

        customerInfo = regex.exec(data);
    }

    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])


console.log('================');

barIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])
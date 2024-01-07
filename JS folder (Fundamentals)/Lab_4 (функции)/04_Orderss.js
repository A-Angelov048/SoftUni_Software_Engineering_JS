function orders(products, quantity) {

    switch (products) {
        case 'water': return sumPrice(1, quantity);
        case 'coke': return sumPrice(1.4, quantity);
        case 'coffee': return sumPrice(1.5, quantity);
        case 'snacks': return sumPrice(2, quantity);
    }

    function sumPrice(price, productQuntity) {

        let result = price * productQuntity;
        console.log(result.toFixed(2));
    }
}

orders('water', 5);
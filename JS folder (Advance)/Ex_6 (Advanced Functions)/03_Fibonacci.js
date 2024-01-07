function getFibonator(){

    let firstNumb = 0;
    let secondNumb = 1;

    function fibonacci(){

        let result = firstNumb + secondNumb;
        firstNumb = secondNumb;
        secondNumb = result
        return firstNumb
    }
    return fibonacci
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

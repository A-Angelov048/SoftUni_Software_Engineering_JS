function listOfNames(data) {

    data.sort((a, b) => a.localeCompare(b))
        .forEach((value, index) => {
            console.log(`${index + 1}.${value}`);
        })
}

listOfNames(["John", "Bob", "Christina", "Ema"])


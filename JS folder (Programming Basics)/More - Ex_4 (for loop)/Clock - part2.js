function clock2() {

    for (let i = 0; i <= 23; i++) {
        for (let j = 0; j <= 59; j++) {
            for (let n = 0; n <= 59; n++) {
                console.log(`${i} : ${j} : ${n}`);
            }
        }
    }
}

clock2()
function guineaPig(arr) {

    let [food, hay, cover, weight] = arr.map(Number);

    let foodToGram = food * 1000;
    let hayToGram = hay * 1000;
    let coverToGram = cover * 1000;
    let weightToGram = weight * 1000;


    for (let i = 1; i <= 30; i++) {

        foodToGram -= 300;

        if (i % 2 === 0) {
            hayToGram = hayToGram - foodToGram * 0.05;
        }
        if (i % 3 === 0) {
            coverToGram = coverToGram - weightToGram * (1 / 3);
        }

        if (foodToGram <= 0 || hayToGram <= 0 || coverToGram <= 0) {
            return 'Merry must go to the pet store!';
        }
    }

    return `Everything is fine! Puppy is happy! Food: ${(foodToGram / 1000).toFixed(2)}, Hay: ${(hayToGram / 1000).toFixed(2)}, Cover: ${(coverToGram / 1000).toFixed(2)}.`
}

console.log(guineaPig(["10", "5", "5.2", "1"]));
console.log('=================');
console.log(guineaPig(["1", "1.5", "3", "1.5"]));
console.log('=================');
console.log(guineaPig(["9", "5", "5.2", "1"]));
console.log('=================');

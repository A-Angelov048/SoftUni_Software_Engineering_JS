function inventory(input) {

    let arrOfHeroes = []; // създавам масив в, който ще съхранявам обекти

    for (const currentHero of input) {

        let [hero, level, items] = currentHero.split(' / '); // сплитвам текущия индекс

        let obj = {

            hero: hero,
            level: level,
            items: items
        }

        arrOfHeroes.push(obj); // създавам масив за текущия индекс после по подпъгвам в масива където съхранявам обектите
    }

    arrOfHeroes.sort((a, b) => a.level - b.level); // сортиране на обекта level от по - малко към по - голямо
    
    arrOfHeroes.forEach(i => {

        console.log(`Hero: ${i.hero}`);
        console.log(`level => ${i.level}`);
        console.log(`items => ${i.items}`);
    })
}


inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
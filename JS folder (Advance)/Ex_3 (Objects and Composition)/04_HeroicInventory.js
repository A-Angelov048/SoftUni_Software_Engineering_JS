function heroicInventory(data) {

    let result = [];

    while (data.length !== 0) {

        const curInfoHero = data.shift()
        let [heroName, heroLevel, heroItems] = curInfoHero.split(' / ');
        heroItems = heroItems ? heroItems.split(', ') : [];
        heroLevel = Number(heroLevel)
        let objHero = { name: heroName, level: heroLevel, items: heroItems };
        result.push(objHero);
    }
    return JSON.stringify(result)
}

console.log(
    heroicInventory(['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']));

console.log('=================');

console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));
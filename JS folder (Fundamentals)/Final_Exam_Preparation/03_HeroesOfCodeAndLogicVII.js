function heroesOfCodeAndLogic(data) {

    let numbHeroes = Number(data.shift());
    let heroes = [];

    for (let i = 0; i < numbHeroes; i++) {

        let [heroName, hp, mp] = data.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);
        heroes.push({ heroName, hp, mp });
    }

    let j = 0;
    let command = data[j];
    j++;

    while (command !== 'End') {

        let [curCommand, heroName, spell0, spell1] = command.split(' - ');
        let findHero = heroes.find(n => n.heroName === heroName);

        switch (curCommand) {

            case 'CastSpell':

                if (findHero) {
                    let mpNeeded = Number(spell0);
                    let spellName = spell1;
                    if (findHero.mp >= mpNeeded) {
                        findHero.mp -= mpNeeded;
                        console.log(`${heroName} has successfully cast ${spellName} and now has ${findHero.mp} MP!`);
                    } else {
                        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                    }
                }
                break;

            case 'TakeDamage':
                let damege = Number(spell0);
                let attacker = spell1;
                if (findHero) {
                    findHero.hp -= damege;

                    if (findHero.hp > 0) {
                        console.log(`${heroName} was hit for ${damege} HP by ${attacker} and now has ${findHero.hp} HP left!`);
                    } else {
                        let index = heroes.indexOf(findHero)
                        heroes.splice(index, 1);
                        console.log(`${heroName} has been killed by ${attacker}!`);
                    }
                }
                break;

            case 'Recharge':
                let amountMP = Number(spell0);
                if (findHero) {

                    if (findHero.mp + amountMP > 200) {
                        amountMP = 200 - findHero.mp;
                    }
                    findHero.mp += amountMP;
                    console.log(`${heroName} recharged for ${amountMP} MP!`);
                }
                break;

            case 'Heal':
                let amountHP = Number(spell0);
                if (findHero) {

                    if (findHero.hp + amountHP > 100) {
                        amountHP = 100 - findHero.hp;
                    }
                    findHero.hp += amountHP;
                    console.log(`${heroName} healed for ${amountHP} HP!`);
                }
                break;
        }

        command = data[j];
        j++;
    }
    for (let line of heroes) {
        console.log(line.heroName);
        console.log(`  HP: ${line.hp}`);
        console.log(`  MP: ${line.mp}`);
    }
}


heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);

console.log('==================');

heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]
);
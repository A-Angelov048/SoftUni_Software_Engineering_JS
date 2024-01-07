class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {

        for (let line of footballPlayers) {
            let [name, age, playerValue] = line.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let findName = this.invitedPlayers.find(x => x.name === name);

            if (!findName) {
                this.invitedPlayers.push({ 'name': name, 'age': age, 'playerValue': playerValue });
            }

            findName = this.invitedPlayers.find(x => x.name === name);

            if (findName.playerValue < playerValue) {
                findName.age = age;
                findName.playerValue = playerValue;
            }
        }

        let invitedNames = [];
        for (let line of this.invitedPlayers) {
            const curName = line.name;
            invitedNames.push(curName);
        }
        return `You successfully invite ${invitedNames.join(', ')}.`
    }

    signContract(selectedPlayer) {

        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let findName = this.invitedPlayers.find(x => x.name === name);

        if (!findName) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (playerOffer < findName.playerValue) {
            let difPrice = findName.playerValue - playerOffer
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${difPrice} million more are needed to sign the contract!`)
        }

        findName.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${findName.name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {

        let findName = this.invitedPlayers.find(x => x.name === name)

        if (!findName) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (findName.age < age) {

            let difAge = age - findName.age;
            if (difAge < 5) {
                return `${findName.name} will sign a contract for ${difAge} years with ${this.clubName} in ${this.country}!`;
            } else if (difAge >= 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        debugger
        let playerList = ['Players list:'];

        let sortPlayersName = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        for (let line of sortPlayersName){
            playerList.push(`Player ${line.name}-${line.playerValue}`);
        }
        return playerList.join('\n');
    }
}

// // test newAdditions
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Lionel Messi/40/100", "Pau Torres/25/52"]));

// // test signContract
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/150"));
// console.log(fTeam.signContract("Barbukov/10"));

// // test ageLimit
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// test transferWindowResult
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Lionel Messi/35/50", "Kylian Mbappé/23/160", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());







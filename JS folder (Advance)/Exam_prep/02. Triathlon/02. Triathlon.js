class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (!this.participants.hasOwnProperty(participantName)) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
        return `${participantName} has already been added to the list`
    }

    completeness(participantName, condition) {

        let completedCount = 0;

        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }
        if (this.participants.hasOwnProperty(participantName) && condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        while (condition >= 30) {
            condition -= 30;
            completedCount++;
        }

        if (completedCount < 3) {
            return `${participantName} could only complete ${completedCount} of the disciplines`
        }

        this.listOfFinalists.push({ [participantName]: this.participants[participantName] });
        delete this.participants[participantName];
        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        
        for (let line of this.listOfFinalists) {
            if (line.hasOwnProperty(participantName)) {
                return `${participantName} was rewarded with a trophy for his performance`
            }
        }
        return `${participantName} is not in the current finalists list`
    }
    showRecord(criteria) {

        if (this.listOfFinalists.length === 0) return `There are no finalists in this competition`;

        switch (criteria) {
            case 'male':

                for (let line of this.listOfFinalists) {
                    if (Object.values(line)[0] === 'male') {
                        return `${Object.keys(line)[0]} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                    }
                }

            case 'female':

                for (let line of this.listOfFinalists) {
                    if (Object.values(line)[0] === 'female') {
                        return `${Object.keys(line)[0]} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                    }
                }

            case 'all':
                let result = [`List of all ${this.competitionName} finalists:`];
                for (let line of this.listOfFinalists) {
                    let curName = Object.keys(line)[0]
                    result.push(curName);
                }
                return result.join('\n');
        }
        return `There are no ${criteria}'s that finished the competition`;
    }
}


// // test addParticipant
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// // test completeness
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// // test rewarding
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// // test showRecord
// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// // test showRecord
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

// // test showRecord
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.completeness("George", 95));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.rewarding("George"));
// console.log(contest.showRecord("male"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male")); /* "A new participant has been added - Peter" */
console.log(contest.addParticipant("Sasha", "female")); /* "A new participant has been added - Sasha" */
console.log(contest.completeness("Peter", 100)); /* "Congratulations, Peter finished the whole competition" */
console.log(contest.completeness("Sasha", 90)); /* "Congratulations, Sasha finished the whole competition" */
console.log(contest.rewarding("Peter")); /* "Peter was rewarded with a trophy for his performance" */
console.log(contest.rewarding("Sasha")); /* "Sasha was rewarded with a trophy for his performance" */
console.log(contest.showRecord("all")); /*"List of all Dynamos finalists:\nPeter\nSasha" */





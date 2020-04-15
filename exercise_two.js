// Exercice 2 :
class ExerciseTwo {
	constructor() {
		this.team;
		this.teamAges;
		this.teamNames;
	}

	fonctionFilter = (gamers) => {
		this.team = gamers.filter((i) => i.age >= 18 && i.age <= 55 && i.isGood == true);
		return this;
	}

	sommeAges = () => {
		this.teamAges = this.team.reduce((x, y) => x + y.age, 0);
		return this
	}

	sommeNames = () => {
		this.teamNames = this.team.reduce((x, y) => x + y.name, "");
		return this
	}
}

const gamers = [
    {
        name: "Jean",
        age: 34,
        isGood: true
    },
    {
        name: "Christophe",
        age: 80,
        isGood: true
    },
    {
        name: "Sarah",
        age: 24,
        isGood: true
    },
    {
        name: "Eliot",
        age: 14,
        isGood: true
    },
    {
        name: "Sam",
        age: 35,
        isGood: false
    },
    {
        name: "Max",
        age: 28,
        isGood: true
    }
];

const resultExTwo = new ExerciseTwo();

resultExTwo
.fonctionFilter(gamers)
.sommeAges()
.sommeNames()

console.log(resultExTwo)
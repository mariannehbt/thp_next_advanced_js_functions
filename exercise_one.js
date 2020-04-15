// Exercice 1 :
class ExerciseOne {
	constructor() {
		this.result;
	}

	fonctionCarre = (numbers) => {
		this.result = numbers.map((x) => x * x);
		return this;
	}

	filtreCent = () => {
		this.result = this.result.filter((i) => i > 100);
		return this;
	}

	fonctionReduce = () => {
		this.result = this.result.reduce((x, y) => x + y);
		return this;
	}
}

const numbers = [1, 3, 4, 11, 9, 10, 12, 34, 17];
const resultExOne = new ExerciseOne();

resultExOne
.fonctionCarre(numbers)
.filtreCent()
.fonctionReduce()

console.log(resultExOne)
// Résultat : 1710
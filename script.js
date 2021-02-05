'use strict';

function getRandomNum(min, max) {
	let result = Math.floor(Math.random() * (max - min)) + min;

	console.log(result);

	function guessNumber() {
		let userNum = prompt('Угадайте число от 1 до 100');
		if (+userNum === result) {
			alert('Ура!');
		} else if (userNum === null) {
			alert('Игра окончена');
		} else if (userNum.trim() === '' || isNaN(userNum)) {
			alert('Введите число');
			return guessNumber();
		} else if (userNum > result && userNum !== null) {
			alert('Загаданное число меньше');
			return guessNumber();
		} else if (userNum < result && userNum !== null) {
			alert('Загаданное число больше');
			return guessNumber();
		}
	}

	guessNumber();

}

getRandomNum(1, 100);
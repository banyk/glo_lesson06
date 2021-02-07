'use strict';

function getRandomNum(min, max) {
	let result = Math.floor(Math.random() * (max - min)) + min;
	let counter = 10;

	console.log('Загаданное число: ', result);

	function guessNumber() {
		let userNum = prompt('Угадайте число от 1 до 100');
		if (+userNum === result) {
			return (function () {
				let isWinGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
				if (isWinGame) {
					result = Math.floor(Math.random() * (max - min)) + min;
					console.log('result: ', result);
					counter = 10;
					return guessNumber();
				} else {
					alert('Спасибо за игру, всего хорошего!');
				}
			})();
		} else if (userNum === null) {
			alert('Игра завершена вами');
		} else if (counter === 1) {
			return (function () {
				let isLostGame = confirm('Количество попыток закончилось. Хотели бы сыргать еще?');
				if (isLostGame) {
					result = Math.floor(Math.random() * (max - min)) + min;
					console.log('Загаданное число: ', result);
					counter = 10;
					return guessNumber();
				} else {
					alert('Спасибо за игру, всего хорошего!');
				}
			})();
		} else if (userNum.trim() === '' || isNaN(userNum)) {
			alert('Введите число');
			return guessNumber();
		} else if (userNum > result && userNum !== null) {
			counter--;
			alert('Загаданное число меньше. Осталось попыток ' + counter);
			return guessNumber();
		} else if (userNum < result && userNum !== null) {
			counter--;
			alert('Загаданное число больше. Осталось попыток ' + counter);
			return guessNumber();
		}
	}

	guessNumber();

}

getRandomNum(1, 100);
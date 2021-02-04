'use strict';

const isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};
// функция проверки данных на число

const myNumber = 40;

// const writeNum = function () {
// 	let userNum;
// 	do {
// 		userNum = prompt('Угадай число от 1 до 100');
// 	} while (!isNumber(userNum));
// 	return +userNum;
// };

const newNum = function () {
	let userNum = prompt('Угадай число от 1 до 100');
	if (isNumber(userNum)) {
		return userNum;
	} else {
		userNum = prompt('Угадай число от 1 до 100');
		return userNum;
	}
};

//  userName не перезаписывается 

console.log('newNum();: ', newNum());



const playGame = function () {
	let result = writeNum();
	if (result > myNumber) {
		alert('загаданное число меньше');
		playGame();
	} else if (result < myNumber) {
		alert('загаданное число больше');
		playGame();
	} else {
		alert('Поздравляю, Вы угадали!!!');
	}
	let again = newGame();
	if (again) {
		playGame();
	}

};

// playGame(); 
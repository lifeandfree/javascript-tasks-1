'use strict';
var hours = process.argv[2];
var minutes = process.argv[3];

transferTimeToRomanSystem(hours, minutes);

function transferTimeToRomanSystem(hours, minutes) {
	if (isNaN(hours) || isNaN(minutes)) {
		process.stdout
				.write('Время указано не верно.'
						+ '\n'
						+ 'Ошибка: Введеные параметры не являются числовыми значениями.'
						+ '\n');
		return false;
	}
	
	if ((hours < 0) || (hours > 23) || (minutes < 0) || (minutes > 59)) {
		process.stdout.write('Время указано не верно' + '\n');
	}
	else {
		process.stdout.write((convertToRoman(hours) + ':'
				+ convertToRoman(minutes) + '\n'));
	}
}

function convertToRoman(value) {
	var result = '', amountFifty = Math.floor(value / 50), amountTen = Math
			.floor((value - amountFifty * 50) / 10), amountFive = Math
			.floor((value - amountFifty * 50 - amountTen * 10) / 5), amountUnit = value
			- amountFifty * 50 - amountTen * 10 - amountFive * 5;
	
	if ((amountFifty == 0) && (amountTen == 0) && (amountFive == 0)
			&& (amountUnit == 0))
	{
		return '-';
	}
	
	for (var i = 0; i < amountFifty; i++) {
		result += 'L';
	}
	
	if (amountTen == 4) {
		result += 'XL';
	}
	else {
		for (var i = 0; i < amountTen; i++) {
			result += 'X';
		}
	}
	
	if ((amountFive == 1) && (amountUnit == 4)) {
		result += 'IX';
	}
	else {
		if (amountFive == 1) {
			result += 'V';
		}
		
		if (amountUnit == 4) {
			result += 'IV';
		}
		else {
			for (var i = 0; i < amountUnit; i++) {
				result += 'I';
			}
		}
	}
	return result;
}
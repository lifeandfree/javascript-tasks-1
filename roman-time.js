'use strict';
var hours = process.argv[2];
var minutes = process.argv[3];

transferTimeToRomanSystem(hours, minutes);

function transferTimeToRomanSystem(hours, minutes) {
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);
    if (isNaN(hours) || isNaN(minutes)) {
        console
                .error('Время указано не верно. Ошибка: Введеные параметры не являются числовыми значениями.');
        return false;
    }
    
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        console.error('Время указано не верно');
    }
    else {
        console.log(integerToRoman(hours) + ':' + integerToRoman(minutes));
    }
}

function integerToRoman(n) {
    if (n == 0) {
        return '-';
    }
    var a = [ 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L' ];
    var b = [ 1, 4, 5, 9, 10, 40, 50 ];
    var s = '';
    for (var i = a.length - 1; i >= 0; i--) {
        while (n >= b[i]) {
            s += a[i];
            n -= b[i];
        }
    }
    return s;
}
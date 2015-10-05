'use strict';
var hours = process.argv[2];
var minutes = process.argv[3];

transferTimeToRomanSystem(hours, minutes);

function transferTimeToRomanSystem(hours, minutes) {
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);
    if (isNaN(hours) || isNaN(minutes)) {
        console.error('Время указано не верно. Ошибка: Введеные параметры не являются числовыми значениями.');
        return false;
    }
    
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        console.error('Время указано не верно');
    }
    else {
        console.log(integerToRoman(hours) + ':' + integerToRoman(minutes));
        
        var t = integerToRomanInASCII(hours);
        t.push([ '          ',
                 '          ',
                 '    * *   ',
                 '          ',
                 '    * *   ',
                 '          ',
                 '          ',
                 ]);
        t = t.concat(integerToRomanInASCII(minutes));
        var r = '';
        for (var i = 0; i < t[0].length; i++) {
            for (var j = 0; j < t.length; j++) {
                r += t[j][i];
            }
            r += '\n';
        }
        console.log(r);
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

function integerToRomanInASCII(n) {
    if (n == 0) {
        return [ [ '          ',
                 '          ',
                 '          ',
                 '    ---   ',
                 '          ',
                 '          ',
                 '          ',
                 ] ];
    }
    var c = [];
    c.push([ ' * * * * ',
             '   * *   ',
             '   * *   ',
             '   * *   ',
             '   * *   ',
             '   * *   ',
             ' * * * * ',
             ]);

    c.push([' * * * *  *           * ',
            '   * *     *         *  ',
            '   * *      *       *   ',
            '   * *       *     *    ',
            '   * *        *   *     ',
            '   * *         * *      ',
            ' * * * *        *       ',
            ]);

    c.push([' *           * ',
            '  *         *  ',
            '   *       *   ',
            '    *     *    ',
            '     *   *     ',
            '      * *      ',
            '       *       ',
            ]);

    c.push([' * * * *  *     * ',
            '   * *     *   *  ',
            '   * *      * *   ',
            '   * *       *    ',
            '   * *      * *   ',
            '   * *     *   *  ',
            ' * * * *  *     * ',
            ]);

    c.push([' *     * ',
            '  *   *  ',
            '   * *   ',
            '    *    ',
            '   * *   ',
            '  *   *  ',
            ' *     * ',
            ]);

    c.push([' *     *   *       ',
            '  *   *    *       ',
            '   * *     *       ',
            '    *      *       ',
            '   * *     *       ',
            '  *   *    *       ',
            ' *     *   * * * * ',
            ]);

    c.push([' *       ',
            ' *       ',
            ' *       ',
            ' *       ',
            ' *       ',
            ' *       ',
            ' * * * * ',
            ]);
    var b = [ 1, 4, 5, 9, 10, 40, 50 ];
    var s = [];
    for (var i = c.length - 1; i >= 0; i--) {
        while (n >= b[i]) {
            s.push(c[i]);
            n -= b[i];
        }
    }
    return s;
}
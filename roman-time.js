'use strict';
var hours = process.argv[2];
var minutes = process.argv[3];

var formatRomanNumbers = 'ROMAN';
var formatRomanNumbersASCII = 'ASCII';
var romanNumbers = [ 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L' ];
var arabicNumbers = [ 1, 4, 5, 9, 10, 40, 50 ];
var numbersASCII = [[ ' * * * * ',
                      '   * *   ',
                      '   * *   ',
                      '   * *   ',
                      '   * *   ',
                      '   * *   ',
                      ' * * * * '
                      ],
                      [' * * * *  *           * ',
                       '   * *     *         *  ',
                       '   * *      *       *   ',
                       '   * *       *     *    ',
                       '   * *        *   *     ',
                       '   * *         * *      ',
                       ' * * * *        *       '
                       ],
                       [' *           * ',
                        '  *         *  ',
                        '   *       *   ',
                        '    *     *    ',
                        '     *   *     ',
                        '      * *      ',
                        '       *       '
                        ],
                       [' * * * *  *     * ',
                        '   * *     *   *  ',
                        '   * *      * *   ',
                        '   * *       *    ',
                        '   * *      * *   ',
                        '   * *     *   *  ',
                        ' * * * *  *     * '
                        ],
                       [' *     * ',
                        '  *   *  ',
                        '   * *   ',
                        '    *    ',
                        '   * *   ',
                        '  *   *  ',
                        ' *     * '
                        ],
                       [' *     *   *       ',
                        '  *   *    *       ',
                        '   * *     *       ',
                        '    *      *       ',
                        '   * *     *       ',
                        '  *   *    *       ',
                        ' *     *   * * * * '
                        ],
                       [' *       ',
                        ' *       ',
                        ' *       ',
                        ' *       ',
                        ' *       ',
                        ' *       ',
                        ' * * * * '
                        ] ];
var colonASCII = [ '          ',
                   '          ',
                   '    * *   ',
                   '          ',
                   '    * *   ',
                   '          ',
                   '          ' ];
var zeroASCII = [ '          ',
                '          ',
                '          ',
                '    ---   ',
                '          ',
                '          ',
                '          ',
                ];

hours = parseInt(hours, 10);
minutes = parseInt(minutes, 10);
if (isNaN(hours) || isNaN(minutes)) {
    console.error('Время указано не верно. Ошибка: Введеные параметры не являются числовыми значениями.');
}
else {
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        console.error('Время указано не верно');
    }
    else {
        console.log(arrayToString(integerToRoman(hours, romanNumbers, formatRomanNumbers)) + ':'
                + arrayToString(integerToRoman(minutes, romanNumbers, formatRomanNumbers)));
        var t = integerToRoman(hours, numbersASCII, formatRomanNumbersASCII);
        t.push(colonASCII);
        t = t.concat(integerToRoman(minutes, numbersASCII, formatRomanNumbersASCII));
        var resultASCII = '';
        for (var i = 0; i < t[0].length; i++) {
            for (var j = 0; j < t.length; j++) {
                resultASCII += t[j][i];
            }
            resultASCII += '\n';
        }
        console.log(resultASCII);
    }
}

function integerToRoman(value, numbers, outputFormat) {
    if (value == 0) {
        if (outputFormat == formatRomanNumbers) {
            return [ '-' ];
        }
        if (outputFormat == formatRomanNumbersASCII) {
            return [ zeroASCII ];
        }
    }
    
    var result = [];
    for (var i = numbers.length - 1; i >= 0; i--) {
        while (value >= arabicNumbers[i]) {
            result.push(numbers[i]);
            value -= arabicNumbers[i];
        }
    }
    return result;
}

function arrayToString(array) {
    var r = '';
    for (var i = 0; i < array.length; i++) {
        r += array[i];
    }
    return r;
};
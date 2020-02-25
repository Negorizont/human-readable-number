module.exports = function toReadable (number) {
    let characters = String(number).split(''),
    wordNumber = [],
    words = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    };

    let counter = null;
    
    if (characters.length === 3) {
        wordNumber.push(words[characters[0]]);
        wordNumber.push(words[100]);
        counter = 1;
        characters.shift();
    }
    
    if (characters.length === 2) {
        if (characters[0] > 0) {
            if (characters[0] == 1) {
                wordNumber.push(words[(characters.join(''))]);
            } else {
                wordNumber.push(words[characters[0] + '0']);
                counter++;
                characters.shift();
            }
        } else {
            characters.shift();
        }
    }

    if (characters.length === 1) {
        wordNumber.push(words[characters[0]]);
    }

    if (wordNumber[wordNumber.length - 1] == 'zero' && counter !== null) {
        wordNumber.pop();
    }

    return wordNumber.join(' ');
};


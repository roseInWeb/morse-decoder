const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < expr.length; i = i + 2) {
        arr.push(`${expr[i]}${ !!expr[i+1] ? expr[i+1] : expr[i+1]}`);
    }
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '10') {
            arr2.push('.');
        } else if (arr[i] == '11') {
            arr2.push('-');
        } else if (arr[i] === '00') {
            arr2.push('');
        } else if (arr[i] == '**') {
            arr2.push('/');
        }
    }
    let arr3 = [];
    for (let i = 0; i < arr2.length; i = i + 5) {
        let str = '';
        for (let j = 0; j < 5; j++) {
            str += arr2[i+j];
        }
        arr3.push(str);
    }
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] == '/////') {
                result += ' ';
        }
        for (key in MORSE_TABLE) {
            if (arr3[i] == key) {
                result += MORSE_TABLE[key];
            }
        }
    }
    return result;
}

module.exports = {
    decode
}
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
    let answer = '';
    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i + 10);
        if (letter === '**********') {
            answer += ' ';
        } else {
            letter = letter.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
            answer += MORSE_TABLE[letter];
        }
    }
    return answer;
}

module.exports = {
    decode
}

// This function uses the MORSE_TABLE to map the encoded Morse code strings to their corresponding
// letters and numbers. It then iterates through the input string, decoding each letter by converting
// the 0s and 1s into dots and dashes, and then looking up the corresponding letter in the MORSE_TABLE.
// If the letter is a space, it is added directly to the result. Otherwise, the decoded letter is added
// to the result. The function returns the final decoded string.
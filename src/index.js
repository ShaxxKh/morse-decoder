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

function decodeWord(word) {
    let eachLetterNums
    let decodedWord = ''
    for(let i = 0; i < word.length; i = i + 10) {
        let eachLetterEncoded = ''
        eachLetterNums = word.slice(i, i + 10)
        for(let j = 0; j < eachLetterNums.length; j = j + 2) {
            if(eachLetterNums[j] + eachLetterNums[j + 1] === '10'){
                eachLetterEncoded += '.'
            }
            if(eachLetterNums[j] + eachLetterNums[j + 1] === '11'){
                eachLetterEncoded += '-'
            }
        }
        decodedWord += MORSE_TABLE[eachLetterEncoded]
    }
    return decodedWord
}

function decode(expr) {
    let words = expr.split('**********')
    decodedWordsArray = words.map(word => decodeWord(word))
    decodedStr = decodedWordsArray.join(' ')
    return decodedStr
    // split
    // loop & decode word
    // join
    // return
}

module.exports = {
    decode
}
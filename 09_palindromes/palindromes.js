const palindromes = function (word) {

    let cleanWord = word.replace(/\W/g, '');
    let reversed = '';

    for (i = cleanWord.length - 1; i  > -1; i--) {
        reversed += cleanWord[i];
    }


    return cleanWord.toLowerCase() == reversed.toLowerCase();

};

// Do not edit below this line
module.exports = palindromes;

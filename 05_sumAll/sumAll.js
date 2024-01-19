const sumAll = function(num1, num2) {

    if (typeof num1 != 'number' || typeof num2 != 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    let result = 0;

    let min;
    let max;

    if (num1 > num2) {
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }

    for (i = min; i < max + 1; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;

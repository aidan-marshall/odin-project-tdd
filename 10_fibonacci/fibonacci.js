const fibonacci = function(num) {

    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    }

    
    num1 = 1;
    num2 = 1;

    for (let i = 1; i <= num; i++) {

        total = num1 + num2;
        num1 = num2;
        num2 = total;
        

    }

    return total;

};

console.log(fibonacci(5))

// Do not edit below this line
module.exports = fibonacci;

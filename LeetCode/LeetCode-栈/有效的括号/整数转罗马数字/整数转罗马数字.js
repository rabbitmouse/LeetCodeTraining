/**
 * @param {number} num
 * @return {string}
 */


var intToRoman = function(num) {
    const stack = []
    let mul = 1
    while (num !== 0) {
        let v = num % 10
        num = parseInt(num / 10)

        conversion(v, mul, stack)
        mul = mul * 10
    }

    let str = ''
    for (let i = stack.length - 1; i >= 0; --i) {
        str = str + stack.pop()
    }
    return str
};

var conversion = function(value, mul, stack) {
    if (value * mul >= 1000) {
        for (let i = 0; i < value; i++) {
            stack.push('M')
        }
    } else if (value * mul === 900) {
        stack.push('M')
        stack.push('C')
    } else if (value * mul >= 500) {
        for (let i = 0; i < value - 5; i++) {
            stack.push('C')
        }
        stack.push('D')
    } else if (value * mul === 400) {
        stack.push('D')
        stack.push('C')
    } else if (value * mul >= 100) {
        for (let i = 0; i < value; i++) {
            stack.push('C')
        }
    } else  if (value * mul === 90) {
        stack.push('C')
        stack.push('X') 
    } else if (value * mul >= 50) {
        for (let i = 0; i < value - 5; i++) {
            stack.push('X')
        }
        stack.push('L')
    } else if (value * mul === 40) {
        stack.push('L')
        stack.push('X')
    } else if (value * mul >= 10) {
        for (let i = 0; i < value; i++) {
            stack.push('X')
        }
    } else  if (value * mul === 9) {
        stack.push('X')
        stack.push('I') 
    } else if (value * mul >= 5) {
        for (let i = 0; i < value - 5; i++) {
            stack.push('I')
        }
        stack.push('V')
    } else if (value * mul === 4) {
        stack.push('V')
        stack.push('I')
    } else {
        for (let i = 0; i < value; i++) {
            stack.push('I')
        }
    }
}

console.log(intToRoman(1994))
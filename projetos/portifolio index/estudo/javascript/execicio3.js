function oddEven(value) {
    if (value % 2 !== 0)
        return 'odd'
    if (value % 2 === 0)
        return 'evem'
}

let resultado = oddEven(9)
console.log(`O valor da função é ${resultado}`);
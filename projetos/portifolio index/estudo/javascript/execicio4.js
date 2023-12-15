function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return 'Not a nunber'
    }
    if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz'
    } else if (input % 3 === 0) {
        return 'Fizz'
    } else if (input % 5 === 0) {
        return 'Buzz'
    } else {
        return `O numero ${input} não e divisivel por 3 ou 5`
    }
}
let resultado = fizzBuzz(4)
console.log(resultado);
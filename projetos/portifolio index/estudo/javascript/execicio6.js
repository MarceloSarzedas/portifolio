let a = 14
let b = 58
let resultado = a + b

const calculadora =(valor1, valor2, operacao) => {
    switch (operacao) {
        case '+':

            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
        return valor1 / valor2

    }
}
let start = calculadora(2,6,'*')
console.log(start);
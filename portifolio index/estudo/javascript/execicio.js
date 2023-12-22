const a = 96
const b = 85


const multiplicador = (valor1, valor2) => {
  return valor1 * valor2;
}


function maiorValor(valor1, valor2) {
  if (valor1 > valor2) {
    return valor1;
  } else {
    return valor2;
  }
}
function maiorValorTenario(valor1, valor2,) {
  return (valor1 > valor2) ? valor1 : valor2
}

let resutado = [multiplicador(a, b), maiorValor(a, b), maiorValorTenario(a, b)];
console.log(`A soma dos valores da funçâo  multiplicador e ${resutado[0]} e função maiorValor e ${resutado[1]} e função maiorValorTenario e ${resutado[2]}`);
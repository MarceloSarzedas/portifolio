function isHorizontal(width, height) {
    if (width > height) {
        return true

    } else return false
}
function isHorizontalTenario(width, height) {
    return (width > height) ? true : false
}
let resultado = [isHorizontal(250, 450), isHorizontalTenario(486, 358)]


console.log(`A função verificaçao de horizontal é ${resultado[0]} e a função verificaçao de horizontalTenario é ${resultado[1]}`);
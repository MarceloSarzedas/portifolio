def calcular_imc(peso, altura):
    """Calcula o Índice de Massa Corporal (IMC).

    Args:
        peso (float): Peso em kg.
        altura (float): Altura em metros.

    Returns:
        float: Valor do IMC calculado.
    """
    return peso / (altura ** 2)

def interpretar_imc(imc):
    """Interpreta o valor do IMC e fornece uma classificação.

    Args:
        imc (float): Valor do IMC calculado.

    Returns:
        str: Classificação do IMC.
    """
    if imc < 16.0:
        return "Magreza grave"
    elif imc < 17.0:
        return "Magreza moderada"
    elif imc < 18.5:
        return "Magreza leve"
    elif imc < 25.0:
        return "Saudável"
    elif imc < 30.0:
        return "Sobrepeso"
    elif imc < 35.0:
        return "Obesidade Grau I"
    elif imc < 40.0:
        return "Obesidade Grau II (severa)"
    else:
        return "Obesidade Grau III (mórbida)"

# Exemplo de uso
peso = float(input("Digite o peso em kg: "))
altura = float(input("Digite a altura em metros: "))

imc = calcular_imc(peso, altura)
classificacao = interpretar_imc(imc)

print(f"Seu IMC é: {imc:.2f}")
print(f"Classificação: {classificacao}")

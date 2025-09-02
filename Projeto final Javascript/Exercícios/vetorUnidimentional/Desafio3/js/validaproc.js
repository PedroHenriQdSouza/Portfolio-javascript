function validaproc() {

    let i, num = [], resultado = [], multiplicar = 0, count = 0;

    for (i = 0; i < 5; i++) {

        num[i] = parseInt(prompt("Insira um numero na posição " + i + " do vetor \n"));
        console.log("Exibir numeros inseridos no vetor")

    }

    multiplicar = parseInt(prompt("Digite o número que deseja multiplicar pelos valores no vetor: "));
    console.log("\n");
    for (i = 0; i < 5; i++) {

        resultado[i] = num[i] * multiplicar;

        console.log(num[i] + " * " + multiplicar + " = " + resultado[i] + "\n");

    }
    return false
}   
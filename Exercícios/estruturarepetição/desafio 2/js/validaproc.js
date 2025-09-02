function validaproc() {

    let i = 1, peso = 0, imc = 0, altura = 0;
    let finalizar;

    do {

        peso = parseFloat(prompt("Insira o seu peso"));
        console.log("Peso informado: " + peso);

        altura = parseFloat(prompt("Insira sua altura"));
        console.log("altura informada: " + altura);

        imc = peso / (altura * altura) ;

        console.log("O imc é " + imc.toFixed(2));
        alert("\nO imc é: " + imc.toFixed(2))

        i = parseInt(prompt("Digite 0 para finalizar"));
    } while (i != 0)
    return false
}   
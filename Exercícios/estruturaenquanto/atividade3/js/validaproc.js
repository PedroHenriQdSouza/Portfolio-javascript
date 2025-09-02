function validaproc() {

    let i = 1;
    let soma = 0;
    let numero;

    while (i <= 3) {

        numero = parseFloat(prompt("Insira o "+i+"° valor:"));
        console.log("O "+i+"° numero informado é: " + numero);
        if(numero%5 == 0){
            soma += numero;
        }
        i++
    }
    console.log("\n a soma dos números divisíveis por 5 é " +soma);
    return false
}   
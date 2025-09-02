function validaproc() {

    let i = 1;
    let maior = 0;
    let numero;

    while (i <= 3) {

        numero = parseFloat(prompt("Insira o "+i+"° valor:"));
        console.log("O "+i+"° numero informado é: " + numero);
        if(numero > maior){
            maior = numero;
        }
        i++
    }
    console.log("\nO maior numero foi " +maior);
    return false
}   
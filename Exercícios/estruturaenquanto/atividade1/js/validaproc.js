function validaproc(){

    let i=1;
    let soma = 0;
    while(i<=3){
        let numero = parseFloat(prompt("Insira o "+i+"° valor:"));
        console.log("O "+i+"° numero informado é: "+numero);

        soma = numero + soma;
        i++;
    }
    console.log("A soma dos numeros é igual a " +soma+".");
    return false
}   
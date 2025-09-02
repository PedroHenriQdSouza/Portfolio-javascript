function validaproc() {

    let i = 1, soma = 0, numero = 0, resposta = 0;


    while (i <= 2) {

        numero = parseFloat(prompt("Insira o " + i + "° valor:"));
        console.log("O " + i + "° numero informado é: " + numero);
        soma += numero;
        i++

    }
    do {

        resposta = parseFloat(prompt("qual é o valor da soma dos dois numeros?"));

        if (resposta != soma) {
            alert("\n Resposta incorreta! tente novamente\n")
            console.log("\n Resposta incorreta! tente novamente\n");
        }

    } while (resposta != soma)
        
        alert("\n resultado correto!")
        console.log("\n resultado correto!");
       
    return false


}   
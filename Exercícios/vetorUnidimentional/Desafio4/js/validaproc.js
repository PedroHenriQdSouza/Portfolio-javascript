function validaproc() {

    let i, num = [];

    for (i = 0; i < 4; i++) {

        num[i] = parseInt(prompt("Insira um numero na " + i + "° posição do vetor \n"));
        console.log("Valor na posição "+i+": "+num[i]);

    }

    console.log("Valores no vetor ao contrario:");
    console.log("\n\n");
    for (i = 3; i >= 0; i--) {

        console.log("valor na posição " +i+": " +num[i]+"\n");

    }
    return false
}   
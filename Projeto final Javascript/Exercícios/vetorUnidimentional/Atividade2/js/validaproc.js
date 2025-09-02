function validaproc() {

    let i, qtdNotas = 0, num = [];

    for (i = 0; i < 3; i++) {

        num[i] = parseFloat(prompt("Insira a nota do aluno " + (i + 1)));
        console.log("a nota inserida foi: " + num[i]);

        if (num[i]>=7.5){
            qtdNotas++
        }

    }
    console.log("\nExibindo notas iguais ou acima de 7.5:\n");
    for (i = 0; i < 3; i++) {

        if (num[i] >= 7.5) {

            console.log(num[i]);

        }

    }
    console.log("A quantidade de notas iguais ou acima de 7.5 é: "+qtdNotas);
    return false
}   
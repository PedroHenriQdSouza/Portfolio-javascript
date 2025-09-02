function validaproc() {

    //declarando a variável controladora i
    let i;
    //Declarando o vetor
    let num = [];

    //Alimentando o vetor com dados
    for (i = 0; i < 3; i++) {

        num[i] = parseFloat(prompt("Insira a nota do aluno " + (i + 1)));
        console.log("° nota inserida foi: "+ num[i]);

    }
    //retirando os valores de cada posição do vetor...
    console.log("\nExibindo notas iguais ou acima de 7.5:\n");
    for (i = 0; i < 3; i++) {

        if (num[i] >= 7.5) {

            console.log(num[i]);
        }

    }
    return false
}   
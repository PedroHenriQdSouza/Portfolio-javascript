function validaproc() {

    let i, notaBimestre1 = [], notaBimestre2 = [], mediaNotas = [];

    for (i = 0; i < 5; i++) {

        notaBimestre1[i] = parseFloat(prompt("Insira a nota do aluno " + (i + 1)+" no primeiro bimestre"));
        notaBimestre2[i] = parseFloat(prompt("Insira a nota do aluno " + (i + 1)+" no segundo bimestre"));
        console.log("Notas do aluno "+(i+1)+"° aluno: " +notaBimestre1[i]+ " "+notaBimestre2[i]);
    }
    console.log("\n")
    for (i = 0; i < 5; i++) {

        mediaNotas[i] = (notaBimestre1[i] + notaBimestre2[i]) / 2;

        console.log("A média das duas notas do "+(i+1)+ "° aluno é: "+mediaNotas[i])
    }

    return false
}   
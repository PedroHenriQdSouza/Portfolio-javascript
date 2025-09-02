function validaproc() {
    let totalAlunos = 0;
    let turmas = 5;
    let alunosPorTurma = [];
    let i = 1;

    do {
        let valor = document.getElementById('valor' + i).value;
        if (valor == "") {
            alert(`Preencha corretamente o campo da turma ${i}.`);
            document.getElementById('valor' + i).focus();
            return false;
        }
        let alunos = parseInt(valor);
        alunosPorTurma.push(alunos);
        totalAlunos += alunos;
        i++;
    } while (i <= turmas);

    for (let j = 0; j < turmas; j++) {
        console.log("Turma " + (j + 1) + ": " + alunosPorTurma[j] + " alunos com média ≥ 7");
    }
    let mediaGeral = (totalAlunos / turmas).toFixed(2);
    console.log("Média geral de alunos por turma com média ≥ 7: " + mediaGeral);

    return false;
}
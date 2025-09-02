function validaproc() {

    let totalIdade = 0, idade = 0, genero, totalSalario = 0, salario = 0, finalizar, i = 1, qtdPessoas = 0, mediaSalario = 0, mediaIdade = 0;
    let salarioFeminino = 0, qtdMulher = 0, salarioMasculino = 0, qtdHomem = 0, medSalHomem = 0, medSalMulher = 0;

    do {

        idade = parseInt(prompt("Insira a idade da " + i + "° pessoa."));
        console.log("idade informada: " + idade);

        totalIdade += idade;

        do {

            genero = (prompt("Insira o genero da " + i + "° pessoa. ('H' para homem e 'M' para mulher.)"));

            if (genero != 'H' && genero != 'M') {
                alert("não é uma das opções");
            } else if (genero == 'H') {
                qtdHomem++
            } else if (genero == 'M') {
                qtdMulher++
            }

        } while (genero != 'H' && genero != 'M');

        salario = parseInt(prompt("Insira o salario da " + i + "° pessoa."));
        console.log("salario informado: " + salario);

        qtdPessoas++
        totalSalario += salario;

        if (genero == 'H') {
            salarioMasculino += salario;
            console.log(salarioMasculino);
        } else if (genero == 'M') {
            salarioFeminino += salario;
            console.log(salarioFeminino);
        }

        finalizar = (prompt("para ver os resultados, escreva 'Finalizar'"));
        i++

    } while (finalizar != 'Finalizar')

    mediaSalario = totalSalario / qtdPessoas;

    mediaIdade = totalIdade / qtdPessoas;

    medSalMulher = salarioFeminino / qtdMulher;

    medSalHomem = salarioMasculino / qtdHomem;

    console.log("Média de salário do grupo: " + mediaSalario);
    console.log("Média de todas as idades: " + mediaIdade);
    console.log("Média de salário do gênero feminino: " + medSalMulher);
    console.log("Média de salário do gênero masculino: " + medSalHomem);

    alert("Média de salário do grupo: " + mediaSalario + "\nMédia de todas as idades: " + mediaIdade + "\nMédia de salário do gênero feminino: " + medSalMulher + "\nMédia de salário do gênero masculino: " + medSalHomem)

    return false
}   
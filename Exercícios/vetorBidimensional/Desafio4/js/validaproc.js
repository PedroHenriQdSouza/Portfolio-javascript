function validaproc() {

    let num = [], total = 0, linhasomar = 0, count = 1, qtdColuna = 0;


    let linhaNum = 4;
    let colunaNum = 5;

    for (let L = 0; L < linhaNum; L++) {
        num[L] = [];
        for (let C = 0; C < colunaNum; C++) {

            num[L][C] = parseInt(prompt("insira um valor na linha " + L + " coluna " + C + " da matriz"));

            linhasomar = linhasomar + num[L][C];
            total += num[L][C];

        }
        console.log("A soma da " + (L + 1) + "° linha da matriz é " + linhasomar);
        linhasomar = 0;

    }

    console.log("O valor total da matriz é " + total);
    return false;
}   
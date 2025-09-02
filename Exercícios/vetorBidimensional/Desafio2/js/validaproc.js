function validaproc() {

    let num = [], resultado = 0, soma = 0;

    let colunaNum = 4;
    let linhaNum = 3;

    for (let L = 0; L < linhaNum; L++) {
        num[L] = [];

        for (let C = 0; C < colunaNum; C++) {

            num[L][C] = parseFloat(prompt("insira um valor na linha " + L + " coluna " + C + " da matriz"));

            soma += num[L][C];
        }
    }
    console.log("A soma dos valores na matriz é: " +soma);
    return false;
}   
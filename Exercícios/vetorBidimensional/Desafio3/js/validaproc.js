function validaproc() {

    let num = [],mult = [];

    let colunaNum = 5;
    let linhaNum = 5;

    let colunaMult = 5;
    let linhaMult = 5;

    for (let L = 0; L < linhaNum; L++) {
        num[L] = [];

        for (let C = 0; C < colunaNum; C++) {

            num[L][C] = parseInt(prompt("insira um valor na linha " + L + " coluna " + C + " da matriz"));

        }
    }

    console.log(num);

    for (let L = 0; L < linhaMult; L++) {
        mult[L] = [];

        for (let C = 0; C < colunaMult; C++) {

            mult[L][C] =  num[L][C] * 2

        }

    }
    console.log(mult);
    return false;
}   
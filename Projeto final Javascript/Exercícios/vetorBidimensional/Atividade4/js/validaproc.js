function validaproc() {

    let num = [], resultado = 0, linhasomar = 0;
    
    let linhaNum = 2;
    let colunaNum = 3;

    for (let L = 0; L < linhaNum; L++) {
        num[L] = [];
        for (let C = 0; C < colunaNum; C++) {

            num[L][C] = parseInt(prompt("insira um valor na linha " + L + " coluna " + C + " da matriz"));
        }
    }

    console.log(num);

    for (let L = 0; L < linhaNum; L++) {
        for (let C = 0; C < colunaNum; C++) {

            console.log("Linha "+L+ " Coluna "+C+": "+num[L][C]);

        }
    }

}   
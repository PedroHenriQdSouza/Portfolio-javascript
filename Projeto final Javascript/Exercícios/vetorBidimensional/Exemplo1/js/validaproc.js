function validaproc2() {

    let num = [];
     
    let colunaNum = 0;
    let linhaNum = 0;

    linhaNum = parseInt(prompt("Quantas linhas terá a matriz?"));
    colunaNum = parseInt(prompt("Quantas colunas terá a matriz?"));

    for (let L = 0; L < linhaNum; L++) {
        num[L] = [];//serve para criar uma nova coluna na matriz, toda vez que passar por esse loop, 
                    // será criado uma nova coluna dentro da posição definida pelo L
        for (let C = 0; C < colunaNum; C++) {

            num[L][C] = parseInt(prompt("insira um valor no vetor"));
        }
    }

    console.log(num);
    
    for (let L = 0; L < linhaNum; L++) {

        for (let C = 0; C < colunaNum; C++) {

            console.log(num[L][C]);

        }
    }
}   
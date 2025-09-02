function validaproc() {

    let num = [], resultado = 0, linhasomar = 0;

    let colunaNum = 2;
    let linhaNum = 2;

    for (let L = 0; L < linhaNum; L++) {
        num[L] = [];//serve para criar uma nova coluna na matriz, toda vez que passar por esse loop, 
        // será criado uma nova coluna dentro da posição definida pelo L
        for (let C = 0; C < colunaNum; C++) {

            num[L][C] = L + C;
            console.log(L+" + "+C+" = " +num[L][C])
        }
    }
    console.log(num);

}   
function validaproc() {

    let num = [];
     
    let colunaNum = 3;
    let linhaNum = 3;

    for (let L = 0; L < linhaNum; L++) {
        num[L] = [];//serve para criar uma nova coluna na matriz, toda vez que passar por esse loop, 
                    // será criado uma nova coluna dentro da posição definida pelo L
        for (let C = 0; C < colunaNum; C++) {

            num[L][C] = parseInt(prompt("insira um valor na linha "+L+" coluna "+C+" da matriz"));
        }
    }  

    let multiplicar = parseInt(prompt("deseja multiplicar a matriz por qual valor?"));

    console.log(num);
    
    for (let L = 0; L < linhaNum; L++) {

        for (let C = 0; C < colunaNum; C++) {

            num[L][C] = num[L][C] * multiplicar

            console.log(num[L][C]);

        }
    }
}   
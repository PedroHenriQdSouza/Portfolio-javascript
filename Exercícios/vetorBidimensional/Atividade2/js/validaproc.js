function validaproc() {

    let num = [], resultado = 0, linhasomar = 0;

    let colunaNum = 2;
    let linhaNum = 2;

    for (let L = 0; L < linhaNum; L++) {
        num[L] = [];//serve para criar uma nova coluna na matriz, toda vez que passar por esse loop, 
        // será criado uma nova coluna dentro da posição definida pelo L
        for (let C = 0; C < colunaNum; C++) {

            num[L][C] = parseInt(prompt("insira um valor na linha " + L + " coluna " + C + " da matriz"));
        }
    }
    let erro = 0;
    do {

        if(erro == 1){
            alert("Insira apenas 1 ou 2");
        }
        linhasomar = parseInt(prompt("deseja somar os valores de qual linha da matriz?"));

        if(linhasomar != 1 && linhasomar != 2){
            erro = 1;
        }else{
            erro = 0;
        }
        
    } while (erro == 1);
    
    console.log(num);
    if(linhasomar == 1){

        resultado = num[0][0] + num[0][1];

    }else{

        resultado = num[1][0] + num[1][1];

    }
    console.log("O resultado da soma é: "+resultado);
}   
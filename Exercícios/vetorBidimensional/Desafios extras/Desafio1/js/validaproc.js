function validaproc() {

    let num = [];

    let colunaNum = 4;
    let linhaNum = 4;
    let count = 0;

    for (let L = 0; L < linhaNum; L++) {
        num[L] = [];

        for (let C = 0; C < colunaNum; C++) {
            
            count++
            num[L][C] = count;

            if(L == 0 && C == 0){
                console.log("O numero na diagonal (linha "+(L+1)+", coluna "+(C+1)+") da matriz é: "+ num[L][C]);
            } else if(L == 0 && C == 3){
                console.log("O numero na diagonal (linha "+(L+1)+", coluna "+(C+1)+") da matriz é: "+ num[L][C]);
            }else if(L == 3 && C == 0){
                console.log("O numero na diagonal (linha "+(L+1)+", coluna "+(C+1)+") da matriz é: "+ num[L][C]);
            }else if(L == 3 && C == 3){
                console.log("O numero na diagonal (linha "+(L+1)+", coluna "+(C+1)+") da matriz é: "+ num[L][C]);
            }

        }
    }
    console.log(num);
    return false;
}   
function validaproc() {

    let num = [], somaRenda = 0, qtd = 0, mediaRenda = 0;
    
    let linhaNum = 6;
    let colunaNum = 4;

    for (let L = 0; L < linhaNum; L++) {
        num[L] = [];
        for (let C = 0; C < colunaNum; C++) {

            num[L][C] = parseInt(prompt("Adicione a renda do "+(L+1)+"° andar, apartamento "+(C+1)+": "));

            somaRenda += num[L][C];
            qtd++
        }
    }
    mediaRenda = somaRenda / qtd;

    console.log("A renda total do prédio é: "+somaRenda);
    console.log("A renda media do prédio é: "+mediaRenda);
    return false;

}   
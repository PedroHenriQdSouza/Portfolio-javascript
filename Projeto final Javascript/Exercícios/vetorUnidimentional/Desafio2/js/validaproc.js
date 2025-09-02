function validaproc() {

    let i, num = [], numero = 0, count = 0;

    for (i = 0; i < 10; i++) {

        num[i] = parseInt(prompt("Insira um numero na posição "+i+" do vetor \n"));
        console.log(num[i] + " está na posição "+i);
    
    }

    numero = parseInt(prompt("Digite o número que deseja localizar no vetor: "));
    console.log("\n");
    for (i = 0; i < 10; i++) {

        if(num[i] == numero){
            console.log(" O numero "+numero+" foi encontrado na posição "+i+" do vetor \n");
            
            count=1;
        }
        
    }
    if(count != 1){
        console.log(" O numero "+numero+" não foi encontrado no vetor \n");
    }
    return false
}   
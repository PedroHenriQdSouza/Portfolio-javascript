function validaproc() {

    let compras = [], totalCompras = [], mediaCompras = [], clientes = [], qtdCompras = [], count = 0, menu = 0;

    let colunaNum = 3;
    let linhaNum = 3;

    for (let L = 0; L < linhaNum; L++) {
        compras[L] = [];
        totalCompras[L] = 0;

        clientes[L] = prompt("Insira o nome do " + (L + 1) + "° cliente: ");
        console.log(clientes[L]);
        for (let C = 0; C < colunaNum; C++) {

            compras[L][C] = parseFloat(prompt("Qual foi o valor das compras de " + clientes[L] + " no " + (C + 1) + "° mês: "));
            console.log(compras[L][C]);

            totalCompras[L] += compras[L][C];


            if (compras[L][C] != 0) {
                count++
                qtdCompras[L] = count;
            }
        }
        count = 0;
    }

    for (let L = 0; L < linhaNum; L++) {
        mediaCompras[L] = 0;
        for (let C = 0; C < colunaNum; C++) {

            mediaCompras[L] = compras[L][C];

        }
    }
    menu = parseInt(prompt("Escolha uma das opções\n 1 - ver compras de " + clientes[0] + "\n 2 - ver compras de " + clientes[1] + "\n 3 - ver compras de " + clientes[2]+ "\n Ver tabela de compras completa"))
    switch (menu) {
        case 1:
            console.log("compras de "+clientes[0])
            for (let C = 0; C < colunaNum; C++) {

                console.log("compras de "+clientes[0]+" no mês "+(C+1)+": "+compras[0][C]);
                mediaCompras[C] = 0;
            }
        break
        case 2:
            console.log("compras de "+clientes[1]);
            for (let C = 0; C < colunaNum; C++) {

                console.log("compras de "+clientes[0]+" no mês "+(C+1)+": "+compras[1][C]);
                mediaCompras[C] = 0;
            }
        break;
        case 3:
            console.log("compras de "+clientes[2]);
            for (let C = 0; C < colunaNum; C++) {

                console.log("compras de "+clientes[0]+" no mês "+(C+1)+": "+compras[2][C]);
                mediaCompras[C] = 0;
            }
        break;
        case 4:
            console.log("compras de "+clientes[3]);
            for (let C = 0; C < colunaNum; C++) {

                console.log("compras de "+clientes[0]+" no mês "+(C+1)+": "+compras[3][C]);
                mediaCompras[C] = 0;
            }
        break;
        case 5:

            for (let L = 0; L < linhaNum; L++) {
                
                for (let C = 0; C < colunaNum; C++) {
        
                    mediaCompras[L] = compras[L][C];
        
                }
                console.log("Media compras do cliente " + mediaCompras[L]);
            }
            console.log(compras);
            console.log(clientes);
        break
        default:
            alert(menu+" não está nas opções.")
        break;
    }
}
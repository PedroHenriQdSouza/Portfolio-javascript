function validaproc() {

    let i, num = [];

    for (i = 0; i < 10; i++) {

        num[i] = i * i;
        console.log("o " + (i+1) + "° valor no vetor é: " + num[i]);

    }
    console.log("\n")
    for (i = 0; i < 10; i++) {

        console.log(i+ "*"+i+" = "+num[i] + " ");

    }
    return false
}   
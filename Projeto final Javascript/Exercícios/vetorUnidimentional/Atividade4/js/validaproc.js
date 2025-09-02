function validaproc() {

    let i, num = [];

    for (i = 0; i < 10; i++) {

        num[i] = i;

    }
    console.log("\n")
    for (i = 0; i < 10; i++) {

        if (i % 2 != 0) {
            console.log("O número " + num[i] + " está em uma posição impar no vetor.\n");
        }

    }
    return false
}   
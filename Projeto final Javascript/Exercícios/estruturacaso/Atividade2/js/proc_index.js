function procCalcFormulario() {
    /* Validação de campos */
    if (document.getElementById('Numero').value == "") {

        alert("Preencha o primeiro campo de texto.");
        document.frmcalc.txtnumero.focus();
        return false;

    } else if (document.getElementById('Numero2').value == "") {

        alert("Preencha o segundo campo de texto.");
        document.frmcalc.txtnumero2.focus();
        return false;

    } else if (document.getElementById('operacao').value == "") {

        alert("Escolha a operação que deseja realizar.");
        document.frmcalc.operacao.focus();
        return false;

    } else {
        let Numero = parseInt(document.getElementById('Numero').value)
        let Numero2 = parseInt(document.getElementById('Numero2').value)
        let operacao = parseInt(document.getElementById('operacao').value)
        let resultado = 0

        switch (operacao) {
            case 1:

                resultado = Numero + Numero2
                alert("o resultado de " + Numero + " + " + Numero2 + " é " + resultado);//mostra o resultado na pagina em forma de alerta
                console.log("o resultado de " + Numero + " + " + Numero2 + " é " + resultado);//mostra o resultado no console
                if (resultado % 2 === 0) {
                    console.log(resultado + " é um numero par.");
                } else {
                    console.log(resultado + " é um numero impar.");
                }
                return false

            break;
            case 2:

                resultado = Numero - Numero2
                alert("o resultado de " + Numero + " - " + Numero2 + " é " + resultado);//mostra o resultado na pagina em forma de alerta
                console.log("o resultado de " + Numero + " - " + Numero2 + " é " + resultado);//mostra o resultado no console
                if (resultado % 2 === 0) {
                    console.log(resultado + " é um numero par.");
                } else {
                    console.log(resultado + " é um numero impar.");
                }
                return false

            break;
            case 3:

                resultado = Numero * Numero2
                alert("o resultado de " + Numero + " x " + Numero2 + " é " + resultado);//mostra o resultado na pagina em forma de alerta
                console.log("o resultado de " + Numero + " x " + Numero2 + " é " + resultado);//mostra o resultado no console
                if (resultado % 2 === 0) {
                    console.log(resultado + " é um numero par.");
                } else {
                    console.log(resultado + " é um numero impar.");
                }
                return false

            break;
            case 4:

                if (Numero2 === 0) {
                    alert("Não é possível dividir por zero");
                    document.frmcalc.txtnumero2.focus();
                } else {

                    resultado = Numero / Numero2
                    alert("o resultado de " + Numero + " / " + Numero2 + " é " + resultado);//mostra o resultado na pagina em forma de alerta
                    console.log("o resultado de " + Numero + " / " + Numero2 + " é " + resultado);//mostra o resultado no console
                    if (resultado % 2 === 0) {
                        console.log(resultado + " é um numero par.");
                    } else {
                        console.log(resultado + " é um numero impar.");
                    }

                }
                return false

            break;
            default:
                alert("Operação inválida")
                return false
            break;
        }
    }
}
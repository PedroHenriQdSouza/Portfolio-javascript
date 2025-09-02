

/* $(document).ready(function () {
    $("#olamundo").click(function () {//ao clicar no botão, a função seguite será executada

        alert('ola mundo');
        
    });
}); */

function procFormulario() {

    if (document.frmnumero.txtnum1.value == "") {
        alert("Preencha o campo numero 1.");
        document.frmnumero.txtnum1.focus();
        return false;

    } else if (document.frmnumero.txtnum2.value == "") {
        alert("Preencha o campo numero 2.");
        document.frmnumero.txtnum2.focus();
        return false;

    } else {


        let numero1 = parseFloat(document.getElementById('num1').value);
        let numero2 = parseFloat(document.getElementById('num2').value);

        if (numero1 > numero2) {

            alert("O primeiro numero (" + numero1 + ") é maior que o segundo numero (" + numero2 + ").");

        } else if (numero1 == numero2) {

            alert("O primeiro numero (" + numero1 + ") é igual ao segundo numero (" + numero2 + ").");

        } else if (numero1 < numero2) {

            alert("O primeiro numero (" + numero1 + ") é menor que o segundo numero (" + numero2 + ").");

        }
    }
}
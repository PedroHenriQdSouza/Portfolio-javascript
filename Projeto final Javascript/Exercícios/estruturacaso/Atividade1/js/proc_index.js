function procFormulario() {
    /* Validação de campos */
    if (document.getElementById('numint').value == "") {

        alert("Preencha o campo de idade.");
        document.frmnumint.txtnumint.focus();
        return false;

    } else {
        let numint = parseInt(document.getElementById('numint').value)
        switch (true) {
            case (numint >= 0 && numint <= 3):
                console.log("Bebê");
                return false
                break;

            case (numint >= 4 && numint <= 10):
                console.log("Criança");
                return false
                break;

            case (numint >= 11 && numint <= 18):
                console.log("Adolecente");
                return false
                break;

            case (numint > 18):
                console.log("Adulto")
                return false
                break;

            default:
                alert("Idade inválida")
                return false
        }
    }
}
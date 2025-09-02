function procFormulario(){
    if (document.getElementById('valor').value == "") {

        alert("Preencha o primeiro campo de texto.");
        document.frmtabuada.Numero.focus();
        return false;

    } else {
        let numero = parseInt(document.getElementById('valor').value)
        let resultado = 0

        for(let i = 1; i<11;i++){
            
            resultado = numero * i;
            console.log(+numero+" * "+i+" = "+resultado);
            
        }
        return false;
    }

}
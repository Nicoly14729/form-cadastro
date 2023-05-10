function Verificar() {

     let name = document.getElementById('loginName').value;
    
     let email = document.getElementById('loginEmail').value;
    
     let idade = document.getElementById('loginIdade').value;
    
     if (!name || !email || !idade)
    
     alert("Campos de preenchimento obrigatório. Favor preencher")
    
    }